import { ChevronRightIcon } from "@heroicons/react/20/solid";
// import { Fragment, useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaList } from "react-icons/fa";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Checkbox, InputNumber, TreeSelect } from "antd";
// import { DownOutlined } from "@ant-design/icons";
const Category = () => (
  <div className="my-12">
    <h3 className="sr-only">Categories</h3>
    <h3 className="text-base font-bold pb-2 hidden lg:block px-4 text-blue-600 mx-2 uppercase">
      Filters
    </h3>
    <form className="hidden lg:block">
      <hr className="py-2 mx-6" />
      <div className=" w-full px-4">
        <div className="flex flex-col justify-center mx-auto w-full max-w-md rounded-2xl px-2 pb-2">
          <Disclosure defaultOpen={true}>
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full justify-between  bg-blue-600 px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring hover:bg-blue-700 focus-visible:ring-blue-500/75">
                  <span>Category</span>
                  <ChevronRightIcon
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-5 w-5 text-white font-bold`}
                  />
                </DisclosureButton>
                <Transition
                  enter="transition duration-200 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-200 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <DisclosurePanel className="px-2 pb-2 pt-4 text-sm text-roti-900">
                    <TreeSelect />
                  </DisclosurePanel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" defaultOpen={true} className="mt-2">
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full justify-between  bg-blue-600 px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring hover:bg-blue-700 focus-visible:ring-blue-500/75">
                  <span>Price</span>
                  <ChevronRightIcon
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="flex px-2 justify-between items-center pb-2 pt-4 text-sm text-roti-900 focus:outline focus:outline-roti-500">
                  <InputNumber className="text-roti-900 focus:outline focus:outline-roti-500" />
                  <span className="mx-2 text-roti-900">to</span>
                  <InputNumber className="text-roti-900 focus:outline focus:outline-roti-500" />
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" defaultOpen={true} className="mt-2">
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full justify-between  bg-blue-600 px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring hover:bg-blue-700 focus-visible:ring-blue-500/75">
                  <span>Availability</span>
                  <ChevronRightIcon
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="flex flex-col px-2 pb-2 pt-4 text-sm text-roti-900">
                  <Checkbox className="text-roti-900 checked:bg-roti-600">
                    Available
                  </Checkbox>
                  <Checkbox className="text-roti-900 checked:bg-roti-600">
                    Sold Out
                  </Checkbox>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </form>
  </div>
);
export default Category;
