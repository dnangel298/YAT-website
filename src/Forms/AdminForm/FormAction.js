export default function FormAction({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className="group relative mt-10 flex w-full justify-center rounded-md border border-transparent
             bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700
             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          onSubmit={handleSubmit}
        >
          {text}    
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
