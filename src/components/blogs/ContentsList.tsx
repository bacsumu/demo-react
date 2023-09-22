
function ContentItem(props:{
  id:string;
  title:string;
  content:string;
}){
  return (
    <div key={props.id}>
      <p><div>{props.title}</div></p>
      <p><div>{props.content}</div></p>
    </div>
  );
}

export default function ContentsList() {
  const contentsList: {
    id:string;
    title:string;
    content:string;
  }[] = [
    {id:'1', title:'test1', content:'contents'},
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
  