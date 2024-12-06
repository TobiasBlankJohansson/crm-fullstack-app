import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { updateSale } from "@/api/sales";
import { getCustomerSelection } from "@/api/customer";
import { getProjectSelection } from "@/api/project";

// Types
type SaleObject = {
  id: string;
  title: string | null;
  count: string;
  detail: Detail[];
  itemProperty: ItemPropertyProp[];
};

type Detail = {
  title: string;
  value: string;
};

type ItemPropertyProp = {
  title: string;
  info: string[];
};

type CustomerInfo = {
  id: string;
  title: string;
};

type ProjectInfo = {
  id: string;
  title: string;
};

type UpdateSaleProps = {
  sale: SaleObject;
  onClose: () => void;
  onUpdate: () => void;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UpdateSaleForm({
  sale,
  onClose,
  onUpdate,
  setRender,
}: UpdateSaleProps) {
  const [formData, setFormData] = useState<SaleObject>({ ...sale });
  const [customers, setCustomers] = useState<CustomerInfo[]>([]);
  const [projects, setProjects] = useState<ProjectInfo[]>([]);

  useEffect(() => {
    // Fetch customers and projects when the form is loaded
    console.log("ewqe");
    const fetchSelections = async () => {
      const customerData = await getCustomerSelection();
      const projectData = await getProjectSelection();
      setCustomers(customerData);
      setProjects(projectData);
    };

    fetchSelections();
  }, []);

  const handleFormChange = (
    propertyIndex: number,
    field: "info",
    value: string
  ) => {
    setFormData((prev) => {
      const updatedProperties = [...prev.itemProperty];
      updatedProperties[propertyIndex] = {
        ...updatedProperties[propertyIndex],
        [field]: [value],
      };
      return { ...prev, itemProperty: updatedProperties };
    });
  };

  const handleSave = async () => {
    try {
      console.log(formData);
      const updatedSale = {
        id: formData.id,
        name:
          formData.itemProperty.find((prop) => prop.title === "Name")
            ?.info[0] || "",
        company:
          formData.itemProperty.find((prop) => prop.title === "Company")
            ?.info[0] || "",
        project:
          formData.itemProperty.find((prop) => prop.title === "Project")
            ?.info[0] || "",
        sale: formData.itemProperty.find((prop) => prop.title === "Sales")
          ?.info[0],
      };

      await updateSale(updatedSale);
      setRender(() => true);
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating sale:", error);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <DialogContent className="max-h-[60vh] overflow-y-auto w-full max-w-2xl bg-white rounded-lg p-6">
          <DialogHeader>
            <DialogTitle>Update {formData.title || "Sale"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {formData.itemProperty.map((property, index) => (
              <div key={index} className="space-y-2">
                <Label htmlFor={`property-${index}`}>{property.title}</Label>
                {property.title === "Company" ? (
                  <select
                    id={`property-${index}`}
                    value={property.info[0] || ""}
                    onChange={(e) =>
                      handleFormChange(index, "info", e.target.value)
                    }
                    className="block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a Company</option>
                    {customers.map((customer) => (
                      <option key={customer.id} value={customer.id}>
                        {customer.title}
                      </option>
                    ))}
                  </select>
                ) : property.title === "Project" ? (
                  <select
                    id={`property-${index}`}
                    value={property.info[0] || ""}
                    onChange={(e) =>
                      handleFormChange(index, "info", e.target.value)
                    }
                    className="block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a Project</option>
                    {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.title}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Input
                    id={`property-${index}`}
                    value={property.info[0] || ""}
                    onChange={(e) =>
                      handleFormChange(index, "info", e.target.value)
                    }
                  />
                )}
              </div>
            ))}
          </div>
          <DialogFooter className="mt-6 flex justify-end space-x-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="default" onClick={handleSave}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
}
