Write-Host "Deploy project template for Visual Studio 2015"
Write-Host "Deploying project template into custom templates"
$installationPath = "$env:USERPROFILE";
$installationPath = "$installationPath\documents\Visual Studio 2015\Templates\ProjectTemplates";


if(Test-Path ("$installationPath\Visual C#")){
    Write-Host "Deploy to C#"

    if(Test-Path ("$installationPath\Visual C#\AngularJS.App.zip")){
        Remove-Item "$installationPath\Visual C#\AngularJS.App.zip"
    }
    Copy-Item ".\AngularJS.App.zip" "$installationPath\Visual C#"
    Write-Host "Template deployed";

}

if(Test-Path ("$installationPath\Visual Web Developer")){

Write-Host "Deploy to Web Developer"
if(Test-Path ("$installationPath\Visual Web Developer\AngularJS.App.zip")){
        Remove-Item "$installationPath\Visual Web Developer\AngularJS.App.zip"
    }
    Copy-Item ".\AngularJS.App.zip" "$installationPath\Visual Web Developer"
    Write-Host "Template deployed";
}

Read-Host "Deployment successfully finished. Press any key to continue...";