import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "~/lib/store/hooks";
import { toggleCartSidebar } from "~/lib/store/features/cartSlice";
import { Button } from "@ui/components/ui/button";
import { cn } from "@ui/lib/utils";

function CartSidebar() {
  const sidebarOpen = useAppSelector(
    (state) => state.cartReducer.isCartSideBarOpen,
  );

  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
    dispatch(toggleCartSidebar());
  };

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggleSidebar}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-xl font-semibold text-slate-900 flex items-center justify-between">
                        <h2>My Cart</h2>
                        <Button
                          variant={"ghost"}
                          onClick={toggleSidebar}
                          size={"icon"}
                          className={cn(
                            "transition-transform duration-200 ease-linear",
                            sidebarOpen ? "rotate-0" : "rotate-90",
                          )}
                        >
                          <X className="w-6 h-6" />
                        </Button>
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Your content */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default CartSidebar;
