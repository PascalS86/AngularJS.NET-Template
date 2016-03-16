Write-Host "Removing project template for Visual Studio 2015"
Write-Host "Remove project template from custom templates"
$installationPath = "$env:USERPROFILE";
$installationPath = "$installationPath\documents\Visual Studio 2015\Templates\ProjectTemplates";


if(Test-Path ("$installationPath\Visual C#")){
    Write-Host "Remove to C#"

    if(Test-Path ("$installationPath\Visual C#\AngularJS.App.zip")){
        Remove-Item "$installationPath\Visual C#\AngularJS.App.zip"
    }
    Write-Host "Template removed";

}

if(Test-Path ("$installationPath\Visual Web Developer")){

Write-Host "Remove to Web Developer"
if(Test-Path ("$installationPath\Visual Web Developer\AngularJS.App.zip")){
        Remove-Item "$installationPath\Visual Web Developer\AngularJS.App.zip"
    }
    Write-Host "Template removed";
}

Read-Host "Removing successfully finished. Press any key to continue...";