<table>
  <tr>
    <th />
    <th />
    <th />
    <th />
  </tr>
  <tr> <td /><td /><td /><td /></tr>
  <tr> <td /><td /><td /><td /></tr>
  <tr> <td /><td /><td /><td /></tr>
  <tr> <td /><td /><td /><td /></tr>
</table>

<style>
  table {
    overflow: hidden;
    position: relative;
    width: 100%;
    text-align: left;
  }

  table::before {
    content: "";
    position: absolute;
    top: 0;
    left: -25%;
    transform: skew(-15deg) translateX(0%);
    width: 25%;
    height: 100%;
    /* border: 1px solid red; */
    background: linear-gradient(to right, transparent, white, transparent);
    animation: ani 2s linear infinite;
  }

  @keyframes ani {
    to {
      transform: skew(-15deg) translateX(500%);
    }
  }
  table tr {
    height: 2rem;
  }

  table tr th {
    background: hsl(0, 0%, 80%);
  }

  table tr td {
    background: hsl(0, 0%, 90%);
  }
</style>
