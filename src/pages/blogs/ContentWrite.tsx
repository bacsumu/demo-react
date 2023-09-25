export default function ContentWrite() {
  return (
    <>
      <h1>글쓰기</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          제목
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          본문
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
        >
          {" "}
        </textarea>
      </div>
      <div className="mb-3">
        <button type="button" className="btn">
          저장
        </button>
      </div>
    </>
  );
}
