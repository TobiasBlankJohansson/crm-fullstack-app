import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "@/components/ui/pagination";
import { Dialog } from "@radix-ui/react-dialog";
import UpdateSaleForm from "../page/Sales/update/updateSale";

type DisplayProp = {
  title: string;
  displayItems: DisplayObject[];
};

export type DisplayObject = {
  id: string;
  title: string;
  type: string; // E.g., "sale", "project", "customer"
  count: string;
  detail: Detail[];
  itemProperty: ItemPropertyProp[];
};

export type Detail = {
  title: string;
  value: string;
};

export type ItemPropertyProp = {
  title: string;
  info: string[];
};

export function Display({ title, displayItems }: DisplayProp) {
  const [selectedItem, setSelectedItem] = useState<DisplayObject | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 5;
  const totalItems = displayItems.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const paginatedItems = displayItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleUpdate = (item: DisplayObject) => {
    setSelectedItem(item);
  };

  const handleCancel = () => {
    setSelectedItem(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="pt-10 pb-10 pl-14 w-full h-full">
      <h2 className="text-4xl font-semibold mb-6">My {title}</h2>

      {selectedItem && (
        <Dialog open={true} onOpenChange={handleCancel}>
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            {selectedItem.type === "sale" && (
              <UpdateSaleForm
                sale={selectedItem} // Pass the selected sale object
                onClose={handleCancel}
                onUpdate={() => {
                  handleCancel();
                  // Optionally refresh data here if needed
                }}
              />
            )}
            {/* {selectedItem.type === "project" && (
              <UpdateProjectForm
                project={selectedItem} // Pass the selected project object
                onClose={handleCancel}
                onUpdate={() => {
                  handleCancel();
                  // Optionally refresh data here if needed
                }}
              />
            )}
            {selectedItem.type === "customer" && (
              <UpdateCustomerForm
                customer={selectedItem} // Pass the selected customer object
                onClose={handleCancel}
                onUpdate={() => {
                  handleCancel();
                  // Optionally refresh data here if needed
                }}
              />
            )} */}
          </div>
        </Dialog>
      )}

      <Table>
        <TableCaption>A list of your {title}.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Details</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.count}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                {item.detail.map((detail, index) => (
                  <div key={index}>
                    {detail.title}: {detail.value}
                  </div>
                ))}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  className="mr-2"
                  onClick={() => handleUpdate(item)}
                >
                  Update
                </Button>
                <Button variant="destructive">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
