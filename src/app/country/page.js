export const metadata = {
    title: 'Country !!!',
    description: 'This is about from metadata',
  }

export default async () => {
    let response = await fetch("http://localhost:3000/api/country",
    //{cache: "no-store"}
    { next: { revalidate: 10 } }
    )
    let data = await response.json()
    console.log(data)
    return (<div><ol>
            Countries
            {data.sort(function compareFn(a, b) {
  if (a.code < b.code) {
    return -1;
  }
  if (a.cde > b.code) {
    return 1;
  }
  // a must be equal to b
  return 0;
}).map((e, idx, arr) => <div id={e.code} className="uppercase text-2xl font-bold">{idx + 1}. {e.label}</div>)}
            </ol>{data[0].ts}</div>)
}