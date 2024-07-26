import Link from "next/link";
import { Separator } from "../ui/separator";
import Image from "next/image";

export const PostGrid = ({ data, activeTagName }: any) => {
  console.log(data);
  return (
    <>
      <div className="mb-7">
        <div className="container px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="text-gray-500 mb-5 font-semibold flex flex-col justify-center items-center gap-4">
            <p className=" text-black text-5xl">{activeTagName}</p>
          </div>
          <Separator className="mb-7" />
          <div className="text-black font-semibold mb-7 text-2xl">
            Recommended posts
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
            {data?.map((item: any) => (
              <Link
                href={`/post/${item.slug}`}
                className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl hover:scale-105 transition duration-500 cursor-pointer"
                key={item.id}
              >
                <Image
                  src={item.Image?.imageUrl ?? "/uploads/default.jpg"}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                />
                <div className="sm:w-7/12 pl-0 p-5">
                  <div className="space-y-2">
                    <div className="space-y-4">
                      <h4 className="text-2xl font-semibold text-cyan-900">
                        {item?.title}
                      </h4>
                      <h5 className="text-gray-700">
                        by <b>Buzzmaker.com</b> &#x2022;{" "}
                        <b>{item._count.comments} COMMENTS</b>
                      </h5>
                      <p className="text-gray-600">
                        {item.shortDesc}
                      </p>
                    </div>
                    <div
                      className="block w-max text-cyan-600"
                    >
                      Read more
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img
            src="https://tailus.io/sources/blocks/twocards/preview/imgs/man.jpg"
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
          />
          <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-cyan-900">
                  Provident de illo eveniet commodi fuga fugiat laboriosam
                  expedita.
                </h4>
                <p className="text-gray-600">
                  Laborum saepe laudantium in, voluptates ex placeat quo harum
                  aliquam totam, doloribus eum impedit atque! Temporibus...
                </p>
              </div>
              <a
                href="https://tailus.io"
                className="block w-max text-cyan-600"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img
            src="https://tailus.io/sources/blocks/twocards/preview/imgs/man.jpg"
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
          />
          <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-cyan-900">
                  Provident de illo eveniet commodi fuga fugiat laboriosam
                  expedita.
                </h4>
                <p className="text-gray-600">
                  Laborum saepe laudantium in, voluptates ex placeat quo harum
                  aliquam totam, doloribus eum impedit atque! Temporibus...
                </p>
              </div>
              <a
                href="https://tailus.io"
                className="block w-max text-cyan-600"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img
            src="https://tailus.io/sources/blocks/twocards/preview/imgs/man.jpg"
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
          />
          <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-cyan-900">
                  Provident de illo eveniet commodi fuga fugiat laboriosam
                  expedita.
                </h4>
                <p className="text-gray-600">
                  Laborum saepe laudantium in, voluptates ex placeat quo harum
                  aliquam totam, doloribus eum impedit atque! Temporibus...
                </p>
              </div>
              <a
                href="https://tailus.io"
                className="block w-max text-cyan-600"
              >
                Read more
              </a>
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
