import { Button, Input, styled } from "@mui/joy";
import { useForm } from "react-hook-form";
import { addWork } from "../../api";
import { useMutation } from "react-query";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const Work = () => {
  const { register, handleSubmit } = useForm();
  const mutation = useMutation(addWork, {
    onSuccess(data) {
      console.log(data);
    },
  });

  const onSubmit = async (fieldValue: any) => {
    const formData = new FormData();
    formData.append("title", fieldValue.title);
    formData.append("category", fieldValue.category);
    formData.append("year", fieldValue.year);
    formData.append("mainImage", fieldValue.mainImage[0]);
    formData.append("image1", fieldValue.image1[0]);
    formData.append("image2", fieldValue.image2[0]);
    formData.append("image3", fieldValue.image3[0]);
    formData.append("image4", fieldValue.image4[0]);
    mutation.mutate(formData);
  };

  const kategoriler = ["web", "mobile", "desktop"];

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4">
          <Input
            {...register("title")}
            name="title"
            type="text"
            placeholder="Başlık"
          />
          <select
            {...register("category")}
            defaultValue="seç"
            placeholder="Kategori Seç"
          >
            {kategoriler.map((item) => (
              <option key={item} value={item}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
          <Input {...register("year")} type="text" placeholder="Yıl" />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="solid"
            color="warning"
          >
            Ana Resim Seç
            <VisuallyHiddenInput {...register("mainImage")} type="file" />
          </Button>

          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="solid"
            color="warning"
          >
            Resim 1
            <VisuallyHiddenInput {...register("image1")} type="file" />
          </Button>
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="solid"
            color="warning"
          >
            Resim 2
            <VisuallyHiddenInput {...register("image2")} type="file" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="solid"
            color="warning"
          >
            Resim 3
            <VisuallyHiddenInput {...register("image3")} type="file" />
          </Button>
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="solid"
            color="warning"
          >
            Resim 4
            <VisuallyHiddenInput {...register("image4")} type="file" />
          </Button>
        </div>
        <div className="mt-4">
          <Button type="submit" fullWidth color="success">
            Kaydet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Work;
