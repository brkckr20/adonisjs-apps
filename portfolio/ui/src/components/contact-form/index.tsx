import { useMutation } from "react-query";
import GridBox from "../grid-box";
import { useForm } from "react-hook-form";
import { sendMessages } from "../../api";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const { mutate } = useMutation(sendMessages, {
    onSuccess(response) {
      console.log("gelen data", response);
    },
  });

  const submit = (data: any) => {
    mutate(data);
  };
  return (
    <div className="text-white">
      <GridBox isBottomIcon={false}>
        <div className="p-10 w-full">
          <h1 className="text-5xl">
            Contact <span className="text-secondary font-bold">Me!</span>
          </h1>
          <form
            action=""
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleSubmit(submit)}
          >
            <input
              className={`w-full p-3 rounded-lg bg-transparent bg-gradient-to-r from-black/10 to-black/20 outline-none `}
              placeholder="Name *"
              {...register("name")}
              required
            />
            <input
              className={`w-full p-3 rounded-lg bg-transparent bg-gradient-to-r from-black/10 to-black/20 outline-none `}
              placeholder="Email *"
              {...register("email")}
              type="email"
              required
            />
            <input
              className={`w-full p-3 rounded-lg bg-transparent bg-gradient-to-r from-black/10 to-black/20 outline-none `}
              placeholder="Your Subject *"
              {...register("subject")}
              required
            />
            <textarea
              className="w-full p-3 rounded-lg bg-transparent bg-gradient-to-r from-black/10 to-black/20 outline-none"
              cols={30}
              rows={5}
              {...register("message")}
              placeholder="Your Message *"
              required
            ></textarea>
            <button
              className="p-4 bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] rounded-lg"
              type="submit"
            >
              Send message
            </button>
          </form>
        </div>
      </GridBox>
    </div>
  );
};

export default ContactForm;
