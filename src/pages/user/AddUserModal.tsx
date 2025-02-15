import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/hooks";
import { addUser, TDraftUser } from "@/redux/user/userSlice";

const AddUserModal = () => {
  const dispatch = useAppDispatch();
  const form = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data, "data");
    dispatch(addUser(data as TDraftUser));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="ml-4">
          Add user
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="uppercase text-sky-400">
            User Name
          </DialogTitle>
          <DialogDescription className="sr-only">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title </FormLabel>
                  <FormControl>
                    {/* Your form field */}
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserModal;
