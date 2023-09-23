import { BlogItem } from "../../model/blogs/Blogs";


function ContentItem(props:BlogItem){
  return (
    <div key={props.id}>
      <p><div>{props.title}</div></p>
      <p><div>{props.content}</div></p>
    </div>
  );
}

export default function ContentsList() {

  const contentsList:BlogItem[] = [
    {id:'1', title:'test1', content:'contents', views:0},
    {id:'2', title:'test2', content:'contents'},
    {id:'3', title:'test3', content:'contents'},
  ];

  return (
    <>
      <div>
        {
          contentsList.map(content=>{
            console.log(content);
            return <ContentItem key={content.id} id={content.id} title={content.title} content={content.content} />;
          })
        }
      </div>
    </>
  );
}
  