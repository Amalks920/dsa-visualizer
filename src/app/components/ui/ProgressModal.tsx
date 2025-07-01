import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function ProgressModal() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onMouseEnter={open}
        onMouseLeave={close}
        className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30"
      >
        Hover me
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            className="flex min-h-full items-center justify-center p-4"
            onMouseEnter={open}  // Keep dialog open when hovering over it
            onMouseLeave={close} // Close dialog when mouse leaves dialog area
          >
            <div className="relative">
              {/* Triangle (speech bubble tail) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white/10 backdrop-blur-md shadow-lg" />

              <DialogPanel
                className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl shadow-lg"
              >
                <DialogTitle
                  as="h3"
                  className="text-lg font-semibold text-white"
                >
                  AI Conversation
                </DialogTitle>
                <p className="mt-2 text-sm text-white/70">
                  This is a conversational style dialog. You can style this like a chat message or projection.
                </p>
                <div className="mt-4">
                  <Button
                    className="rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-gray-600"
                    onClick={close}
                  >
                    Got it!
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
