import { useRouter } from "next/dist/client/router";

const Others = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div>
      <h1>Others: {id}</h1>
    </div>
  );
};

export default Others;
