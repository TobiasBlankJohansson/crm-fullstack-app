import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "@/components/ui/pagination"; // Assuming you add a pagination component or utility
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";

type DisplayProp = {
  title: string;
  displayItems: DisplayObject[];
};

export type DisplayObject = {
  id: string;
  title: string;
  count: string;
  detail: Detail[];
  itemProperty: ItemPropertyProp[];
  type: string;
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
  const [formData, setFormData] = useState<Partial<DisplayObject>>({});
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  // Pagination Logic
  const totalItems = displayItems.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const paginatedItems = displayItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleUpdate = (item: DisplayObject) => {
    console.log(item + "update");
    setSelectedItem(item);
    setFormData({ ...item });
  };

  const handleCancel = () => {
    setSelectedItem(null);
  };

  const handleFormChange = (field: keyof DisplayObject, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Updated Data:", formData);
    setSelectedItem(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="pt-10 pb-10 pl-14 w-full h-full">
      <h2 className="text-4xl font-semibold mb-6">My {title}</h2>

      {selectedItem ? (
        <Dialog open={true} onOpenChange={handleCancel}>
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <DialogContent className="max-h-[60vh] overflow-y-auto w-full max-w-2xl bg-white rounded-lg">
              <DialogHeader>
                <DialogTitle>Update {selectedItem.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  {formData.itemProperty?.map((detail, index) => (
                    <div key={index} className="space-y-2">
                      <Label htmlFor={`detail-title-${index}`}>
                        {detail.title}
                      </Label>
                      <Input
                        id={`detail-title-${index}`}
                        value={detail.info}
                        onChange={(e) =>
                          setFormData((prev) => {
                            const updatedDetails = [...(prev.detail || [])];
                            updatedDetails[index] = {
                              ...updatedDetails[index],
                              title: e.target.value,
                            };
                            return { ...prev, detail: updatedDetails };
                          })
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
              <DialogFooter className="mt-6 flex justify-end space-x-4">
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button variant="default" onClick={handleSave}>
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </div>
        </Dialog>
      ) : (
        <>
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
        </>
      )}
    </section>
  );
}
