import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

export const NewModelDialog = ({ children }: { children: React.ReactNode }) => {
  const form = useForm();
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new model</DialogTitle>
        </DialogHeader>
        <Separator />
        <Form {...form}>
          <FormField
            control={form.control}
            name="modelName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Model Name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-4">
            <Button
              className="w-full rounded-xl"
              size="sm"
              variant="pastelPrimary"
            >
              Cancel
            </Button>
            <Button size="sm" className="w-full rounded-xl">
              Save
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
