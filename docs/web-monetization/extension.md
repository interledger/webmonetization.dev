---
sidebar_position: 2
---

# Web Monetization Extension

Presently the web monetization agent is implemented as a browser extension.  While efforts to bring native support for Web Monetization into the major browsers are underway, extensions allow any Web Monetization provider to implement against the open-sourced specification.  Extensions are currently available for Chrome and Firefox, with a Safari version in development.  

# Offline capabilities
If the visitor's browser goes offline, the page can no longer send payment requests, and the monetization stream stops.  It resumes when the page comes goes back online.
# Backgrounding
Suppose a browser window is placed in the background by the user.  In that case, the monetization stream should stop because the user sets the focus on another page or application.  Since users cannot read the original monetized page any longer, they should not be charged.  Pages that stream audio are an exception: they will continue to be monetized since users continue to consume that content while on another window or application.

The extension listens to the visibilitychange event that fires whenever the visibilityState of the page changes.  If it becomes hidden, the monetization stream stops.  Whereas if it becomes visible, the stream restarts.

visibilityState becomes hidden when no pixel of that window is currently visible on the screen.  Thus, the following actions will send a window to the background:
Minimizing the window, which includes pressing the Home button on a mobile device.
Placing another window or windows atop so that they cover the original window.
If even a single pixel of the window remains visible, the visibilityState remains visible, and the page will continue to receive payments.  This can lead to a situation where users think they have sent a page to the background, but the monetization stream continues because a tiny sliver remains visible.  Of course, this system is imperfect, but more fine-grained definitions of visibility are hard to implement and will likely lead to many more false positives or negatives.
# Audio
Browser windows that stream audio are an exception to these rules.  They will continue to receive payments even if they are entirely in the background since users can still hear (part of) the content.

# Available Extensions
Web Monetizations extensions are currently available from the following payment providers.  This list will be continuously updated as new extensions are released.  

Coil 