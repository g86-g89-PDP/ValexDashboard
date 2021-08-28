import { useRouter } from "next/dist/client/router";

const Others = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="container p-4 bg-dark rounded shadow">
        <h1 className="text-warning text-center">
          Others: <span className="text-danger">{id}</span>
        </h1>
        <span className="d-flex justify-content-center align-items-center">
          <img src="/images/warning.png" className="w-25" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Others;
