# Lightweight Zero-Dependency Local Web Server for EDU-BOX
# Uses Windows built-in .NET HttpListener

$port = 5600
$url = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host " [EDU-BOX] Offline Learning Hub Server running at $url" -ForegroundColor Cyan
    Write-Host " Open in your browser or connect from other devices on Wi-Fi" -ForegroundColor Yellow
    Write-Host " Press Ctrl+C in terminal to stop server." -ForegroundColor Gray
    Write-Host "==========================================================" -ForegroundColor Green

    # Open default browser
    Start-Process $url

    $baseDir = $PSScriptRoot
    if (-not $baseDir) { $baseDir = Get-Location }

    $mimeTypes = @{
        ".html" = "text/html; charset=utf-8"
        ".css"  = "text/css; charset=utf-8"
        ".js"   = "application/javascript; charset=utf-8"
        ".json" = "application/json; charset=utf-8"
        ".svg"  = "image/svg+xml"
        ".png"  = "image/png"
        ".jpg"  = "image/jpeg"
        ".ico"  = "image/x-icon"
        ".txt"  = "text/plain; charset=utf-8"
    }

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($rawPath)) {
            $rawPath = "index.html"
        }

        $filePath = Join-Path $baseDir $rawPath.Replace('/', '\')

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Cache-Control", "no-cache")
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rawPath")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }

        $response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
