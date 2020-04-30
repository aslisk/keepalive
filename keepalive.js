var WshShell = WScript.CreateObject("WScript.Shell");
for (var i = 0; i < 12; i++) { // Loop 12 times
    WshShell.SendKeys('{SCROLLLOCK}');
    WshShell.SendKeys('{SCROLLLOCK}'); // Toggle Scroll Lock
    WScript.Sleep(300000); // Wait 5 minutes
}
