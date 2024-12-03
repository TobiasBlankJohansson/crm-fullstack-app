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

type DisplayProp = {
  title: string;
  displayItems: DisplayObject[];
};

export type DisplayObject = {
  id: number;
  title: string;
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
  const [formData, setFormData] = useState<Partial<DisplayObject>>({});

  const handleUpdate = (item: DisplayObject) => {
    setSelectedItem(item); // Set the selected item
    setFormData({ ...item }); // Populate the form with the selected item's data
  };

  const handleCancel = () => {
    setSelectedItem(null); // Hide the form and show the list
  };

  const handleFormChange = (field: keyof DisplayObject, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value })); // Update form data
  };

  const handleSave = () => {
    console.log("Updated Data:", formData); // Save logic here
    setSelectedItem(null); // Hide the form after saving
  };

  return (
    <section className="pt-10 pb-10 pl-14 w-full h-full">
      <h2 className="text-4xl font-semibold mb-6">My {title}</h2>

      {selectedItem ? (
        // Update Form
        <div className="p-6 bg-gray-50 rounded-md shadow">
          <h3 className="text-2xl font-bold mb-4">
            Update {selectedItem.title}
          </h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title || ""}
                onChange={(e) => handleFormChange("title", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="count">Count</Label>
              <Input
                id="count"
                value={formData.count || ""}
                onChange={(e) => handleFormChange("count", e.target.value)}
              />
            </div>
            <div>
              <Label>Details</Label>
              {formData.detail?.map((detail, index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`detail-title-${index}`}>Detail Title</Label>
                  <Input
                    id={`detail-title-${index}`}
                    value={detail.title}
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
                  <Label htmlFor={`detail-value-${index}`}>Detail Value</Label>
                  <Input
                    id={`detail-value-${index}`}
                    value={detail.value}
                    onChange={(e) =>
                      setFormData((prev) => {
                        const updatedDetails = [...(prev.detail || [])];
                        updatedDetails[index] = {
                          ...updatedDetails[index],
                          value: e.target.value,
                        };
                        return { ...prev, detail: updatedDetails };
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="default" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      ) : (
        // Table List
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
            {displayItems.map((item) => (
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
      )}
    </section>
  );
}
