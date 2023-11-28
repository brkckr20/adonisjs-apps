import { Button, Input, Option, Select, styled } from "@mui/joy";

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
  const kategoriler = ["web", "mobile", "desktop"];
  return (
    <div className="p-2">
      <form>
        <div className="grid grid-cols-3 gap-4">
          <Input type="text" placeholder="Title" />
          <Select defaultValue="seç" placeholder="Kategori Seç">
            {kategoriler.map((item) => (
              <Option key={item} value={item}>
                {item.toUpperCase()}
              </Option>
            ))}
          </Select>
          <Input type="text" placeholder="Year" />
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
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="solid"
            color="warning"
          >
            Resim 1
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="solid"
            color="warning"
          >
            Resim 2
            <VisuallyHiddenInput type="file" />
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
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="solid"
            color="warning"
          >
            Resim 4
            <VisuallyHiddenInput type="file" />
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
