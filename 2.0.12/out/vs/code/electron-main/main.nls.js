/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/electron-main/main.nls",{"vs/base/common/keybindingLabels":["Ctrl","Shift","Alt","Windows","Ctrl","Shift","Alt","Super","Control","Shift","Alt","Command","Control","Shift","Alt","Windows","Control","Shift","Alt","Super"],"vs/base/common/severity":["Error","Warning","Info"],"vs/code/electron-main/app":["Successfully created trace.","Please create an issue and manually attach the following file:\n{0}","Ok"],"vs/code/electron-main/auth":["Proxy Authentication Required","The proxy {0} requires authentication."],
"vs/code/electron-main/logUploader":["Invalid log uploader endpoint","Uploading...","Upload successful! Log file ID: {0}","You are about to upload your session logs to a secure Microsoft endpoint that only Microsoft's members of the VS Code team can access.","Session logs may contain personal information such as full paths or file contents. Please review and redact your session log files here: '{0}'","By continuing you confirm that you have reviewed and redacted your session log files and that you agree to Microsoft using them to debug VS Code.","Please run code with '--upload-logs={0}' to proceed with upload","Error posting logs: {0}","Error posting logs. Got {0} — {1}","Error parsing response","Error zipping logs: {0}"],
"vs/code/electron-main/main":["Another instance of {0} is running but not responding","Please close all other instances and try again.","A second instance of {0} is already running as administrator.","Please close the other instance and try again.","&&Close","Unable to write program user data.","Please make sure the directory {0} is writeable."],"vs/code/electron-main/window":["You can still access the menu bar by pressing the Alt-key."],
"vs/code/electron-main/windows":["Path does not exist","The path '{0}' does not seem to exist anymore on disk.","URI can not be opened","The URI '{0}' is not valid and can not be opened.","OK","&&Reopen","&&Keep Waiting","&&Close","The window is no longer responding","You can reopen or close the window or keep waiting.","&&Reopen","&&Close","The window has crashed","We are sorry for the inconvenience! You can reopen the window to continue where you left off.","Open","Open Folder","Open File","OK","Unable to save workspace '{0}'","The workspace is already opened in another window. Please close that window first and then try again.","&&Open","Open Workspace","&&Save","Do&&n't Save","Cancel","Do you want to save your workspace configuration as a file?","Save your workspace if you plan to open it again.","&&Save","Save Workspace"],
"vs/platform/configuration/common/configurationRegistry":["Default Configuration Overrides","Configure editor settings to be overridden for {0} language.","Configure editor settings to be overridden for a language.","Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.","Cannot register '{0}'. This property is already registered."],"vs/platform/dialogs/common/dialogs":["...1 additional file not shown","...{0} additional files not shown"],"vs/platform/dialogs/node/dialogService":["Ok","Cancel"],
"vs/platform/environment/node/argv":["Arguments in `--goto` mode should be in the format of `FILE(:LINE(:CHARACTER))`.","Compare two files with each other.","Add folder(s) to the last active window.","Open a file at the path on the specified line and character position.","Force to open a new window.","Force to open a file or folder in an already opened window.","Wait for the files to be closed before returning.","The locale to use (e.g. en-US or zh-TW).","Specifies the directory that user data is kept in. Can be used to open multiple distinct instances of Code.","Print version.","Print usage.","Set the root path for extensions.","List the installed extensions.","Show versions of installed extensions, when using --list-extension.","Uninstalls an extension.","Installs or updates the extension. Use `--force` argument to avoid prompts.","Enables proposed API features for extensions. Can receive one or more extension IDs to enable individually.","Print verbose output (implies --wait).","Log level to use. Default is 'info'. Allowed values are 'critical', 'error', 'warn', 'info', 'debug', 'trace', 'off'.","Print process usage and diagnostics information.","Start with the 'Developer: Startup Performance' command enabled.","Run CPU profiler during startup","Disable all installed extensions.","Disable an extension.","Allow debugging and profiling of extensions. Check the developer tools for the connection URI.","Allow debugging and profiling of extensions with the extension host being paused after start. Check the developer tools for the connection URI.","Disable GPU hardware acceleration.","Uploads logs from current session to a secure endpoint.","Max memory size for a window (in Mbytes).","Usage","options","paths","To read output from another program, append '-' (e.g. 'echo Hello World | {0} -')","To read from stdin, append '-' (e.g. 'ps aux | grep code | {0} -')","Options","Extensions Management","Troubleshooting"],
"vs/platform/extensions/node/extensionValidator":["Could not parse `engines.vscode` value {0}. Please use, for example: ^1.22.0, ^1.22.x, etc.","Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions before 1.0.0, please define at a minimum the major and minor desired version. E.g. ^0.10.0, 0.10.x, 0.11.0, etc.","Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions after 1.0.0, please define at a minimum the major desired version. E.g. ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc.","Extension is not compatible with Code {0}. Extension requires: {1}."],"vs/platform/history/electron-main/historyMainService":["New Window","Opens a new window","Recent Workspaces","{0} {1}","Code Workspace"],"vs/platform/issue/electron-main/issueService":["Your input will not be saved. Are you sure you want to close this window?","Yes","Cancel","Issue Reporter","Process Explorer"],
"vs/platform/label/common/label":["Untitled (Workspace)","{0} (Workspace)","Untitled (Workspace)","{0} (Workspace)","{0} (Workspace)"],"vs/platform/menubar/electron-main/menubar":["New &&Window","&&File","&&Edit","&&Selection","&&View","&&Go","&&Debug","&&Terminal","Window","&&Help","About {0}","&&Preferences","Services","Hide {0}","Hide Others","Show All","Quit {0}","Minimize","Zoom","Bring All to Front","Switch &&Window...","New Tab","Show Previous Tab","Show Next Tab","Move Tab to New Window","Merge All Windows","Check for &&Updates...","Checking For Updates...","D&&ownload Available Update","Downloading Update...","Install &&Update...","Installing Update...","Restart to &&Update..."],
"vs/platform/request/node/request":["HTTP","The proxy setting to use. If not set will be taken from the http_proxy and https_proxy environment variables.","Controls whether the proxy server certificate should be verified against the list of supplied CAs.","The value to send as the 'Proxy-Authorization' header for every network request.","Disable proxy support for extensions.","Enable proxy support for extensions.","Enable proxy support for extensions, override request options.","Experimental setting: Use the proxy support for extensions."],"vs/platform/telemetry/common/telemetryService":["Telemetry","Enable usage data and errors to be sent to a Microsoft online service."],
"vs/platform/update/node/update.config.contribution":["Update","Configure whether you receive automatic updates from an update channel. Requires a restart after change. The updates are fetched from a Microsoft online service.","Enables Windows background updates. The updates are fetched from a Microsoft online service.","Show Release Notes after an update. The Release Notes are fetched from a Microsoft online service."],"vs/platform/windows/electron-main/windowsService":["Version: {0}\nCommit: {1}\nDate: {2}\nElectron: {3}\nChrome: {4}\nNode.js: {5}\nV8: {6}\nOS: {7}","OK","&&Copy"],"vs/platform/workspaces/common/workspaces":["Code Workspace"]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/08cba2fb66e1673b5f6537fce1de1555d169f0a4/core/vs/code/electron-main/main.nls.js.map
