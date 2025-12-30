"use client";

import Image from "next/image";
import Link from "next/link";
import { BsFilePdf } from "react-icons/bs";
import { DocumentInput } from "./document-input";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MenubarMenu } from "@radix-ui/react-menubar";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="Logo" width={36} height={41} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                {/* filemenuStart */}
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  File
                </MenubarTrigger>
                <MenubarContent className="print:hidden">
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileIcon className="mr-2 size-4" />
                      Save
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        <FileJsonIcon className="mr-2 size-4" />
                        JSON
                      </MenubarItem>
                      <MenubarItem>
                        <GlobeIcon className="mr-2 size-4" />
                        HTML
                      </MenubarItem>
                      <MenubarItem>
                        <BsFilePdf className="mr-2 size-4" />
                        PDF
                      </MenubarItem>
                      <MenubarItem>
                        <FileTextIcon className="mr-2 size-4" />
                        Text
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem>
                    <FilePlusIcon className="mr-2 size-4" />
                    New Document
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <FilePenIcon className="mr-2 size-4" />
                    Rename
                  </MenubarItem>
                  <MenubarItem>
                    <TrashIcon className="mr-2 size-4" />
                    Remove
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => window.print()}>
                    <PrinterIcon className="mr-2 size-4" />
                    Print
                    <MenubarShortcut>{`\u2318`}P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              {/* fileEnd  */}
              {/* EditStart */}
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Edit
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Undo2Icon className="mr-2 size-4" />
                    Undo
                    <MenubarShortcut>{`\u2318`}Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Redo2Icon className="mr-2 size-4" />
                    Redo
                    <MenubarShortcut>{`\u2318`}Y</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              {/* editEnd */}
              {/* insertStart */}
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Insert
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Table</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>1 x 1</MenubarItem>
                      <MenubarItem>2 x 2</MenubarItem>
                      <MenubarItem>3 x 3</MenubarItem>
                      <MenubarItem>4 x 4</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Format
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon className="mr-2 size-4" />
                      Text
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        <BoldIcon className="mr-2 size-4" />
                        Bold
                        <MenubarShortcut>{`\u2318`}B</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <ItalicIcon className="mr-2 size-4" />
                        Italic
                        <MenubarShortcut>{`\u2318`}I</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <UnderlineIcon className="mr-2 size-4" />
                        Underline
                        <MenubarShortcut>{`\u2318`}U</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <StrikethroughIcon className="mr-2 size-4" />
                        Strikethrough &nbsp;
                        <MenubarShortcut>{`\u2318`}S</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem>
                    <RemoveFormattingIcon className="mr-2 size-4" />
                    Clear formatting
                    <MenubarShortcut>{`\u2318`}X</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};
