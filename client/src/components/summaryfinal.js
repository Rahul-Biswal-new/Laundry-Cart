function summaryfinal(props) {
  return (
    <div>
      <div class="row trcss">
        <div class="col-lg-4">{props.name}</div>
        <div class="col-lg-4">
          {[
            props.type.wash ? "Washing" : "",
            props.type.fold ? "Folding" : "",
            props.type.pack ? "Packing" : "",
            props.type.press ? "Pressing" : "",
          ]
            .filter((x) => x.length > 0)
            .join(",")}
        </div>
        <div class="col-lg-4 rate-head">{props.cost}</div>
      </div>
    </div>
  );
}

export default summaryfinal;
