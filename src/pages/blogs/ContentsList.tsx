import { BlogItem } from "../../model/blogs/Blogs";

function ContentItem(props: BlogItem) {
  return (
    <div key={props.id}>
      <p>
        <div>{props.title}</div>
      </p>
      <p>
        <div>{props.content}</div>
      </p>
    </div>
  );
}

export default function ContentsList() {
  const contentsList: BlogItem[] = [
    {
      id: "1",
      title: "블로그 제목 1",
      content: "블로그 내용 1",
      views: 0,
      image:
        "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
    },
    {
      id: "2",
      title: "블로그 제목 2",
      content: "블로그 내용 2",
      views: 0,
      image:
        "https://altools.co.kr/_next/static/media/img_feature_alsee_2.4474f0e6.png",
    },
    {
      id: "3",
      title: "블로그 제목 3",
      content: "블로그 내용 3",
      views: 0,
      image:
        "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
    },
  ];

  return (
    <>
      <div>
        {contentsList.map((content) => {
          console.log(content);
          // return <ContentItem key={content.id} id={content.id} title={content.title} content={content.content} />;
          return (
            <>
              <div className="card">
                <img
                  src={content.image}
                  className="card-img-top"
                  alt="..."
                  style={{ maxWidth: "150px" }}
                />

                <div className="card-body">
                  <h5 className="card-title">{content.title}</h5>
                  <p className="card-text">{content.content}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
