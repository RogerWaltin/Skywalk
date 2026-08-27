$Root = "D:\Users\Harris\Documents\Programming\Projects\Skywalk"
$Output = "D:\Users\Harris\Documents\Programming\Projects\Skywalk\Skywalk-tree.txt"

# Folders to completely exclude
$Exclude = @(
    ".git"
)

# Folders to show, but don't show their contents
$ShowOnly = @(
    "node_modules",
    "dist"
)

function Write-Tree {
    param (
        [string]$Path,
        [string]$Prefix = ""
    )

    $Items = Get-ChildItem -LiteralPath $Path | Sort-Object @{Expression = { -not $_.PSIsContainer } }, Name

    foreach ($Item in $Items) {

        # Completely ignore excluded folders
        if ($Item.PSIsContainer -and $Exclude -contains $Item.Name) {
            continue
        }

        # Write the current item
        Add-Content -Path $Output -Value "$Prefix├── $($Item.Name)"

        # Don't enter folders that should only be shown by name
        if ($Item.PSIsContainer -and $ShowOnly -contains $Item.Name) {
            continue
        }

        # Recursively process folders
        if ($Item.PSIsContainer) {
            Write-Tree -Path $Item.FullName -Prefix "$Prefix│   "
        }
    }
}

# Start the output
$RootName = Split-Path $Root -Leaf
Set-Content -Path $Output -Value "$RootName/"

Write-Tree -Path $Root

Write-Host "Folder tree created at:"
Write-Host $Output