/**
 * 
 * @param {String} string リンク
 */
function moveToURL(string) {
    window.location.href = string
}

function moveToURLById(index) {
    window.location.href = URLs[index]
}

const URLs = [
    "Error",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8A%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207260000&dgm=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8A%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8A%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2045",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8A%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207260000&dgm=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8A%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8A%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2045",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8B%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=undefined&tosk=&dt=202207260000&dgm=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8B%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8B%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A3%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2046",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8B%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=undefined&tosk=&dt=202207260000&dgm=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8B%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%EF%BC%AA%EF%BC%B2%E7%AB%8B%E8%8A%B1%EF%BC%BB%E4%B8%8B%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A4%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2046",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207260000&dgm=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=126",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207260000&dgm=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2048",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207260000&dgm=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=126",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207260000&dgm=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E5%8A%B4%E7%81%BD%E7%97%85%E9%99%A2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2048",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207260000&dgm=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2020",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207260000&dgm=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2020",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207260000&dgm=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A3%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2020",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207260000&dgm=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A4%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2021",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207260000&dgm=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A5%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2021",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207260000&dgm=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E9%98%AA%E6%80%A5%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A6%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2021",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207260000&dgm=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=141",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207260000&dgm=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2024",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207260000&dgm=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=141",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207260000&dgm=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A3%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2024",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207260000&dgm=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E6%AD%A6%E5%BA%AB%E3%81%AE%E9%83%B7%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A4%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2024",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207270000&dgm=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2171",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207270000&dgm=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2171",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207270000&dgm=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8C%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A3%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2171",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207270000&dgm=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A4%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2170",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207270000&dgm=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A5%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2170",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207270000&dgm=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%EF%BC%AA%EF%BC%B2%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A6%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2170",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207280000&dgm=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=120",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207280000&dgm=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=120",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207280000&dgm=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2070",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207280000&dgm=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A3%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=120",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202207280000&dgm=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E8%A5%BF%E5%A4%A7%E5%B3%B6%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A4%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2070",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207280000&dgm=%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2162",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207280000&dgm=%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2162",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E5%8D%97%E6%AD%A6%E5%BA%AB%E8%8D%98%E4%B8%83%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207280000&dgm=%E5%8D%97%E6%AD%A6%E5%BA%AB%E8%8D%98%E4%B8%83%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E5%8D%97%E6%AD%A6%E5%BA%AB%E8%8D%98%E4%B8%83%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=132",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E9%98%AA%E7%A5%9E%E5%B0%BC%E5%B4%8E%E9%A7%85%E5%8C%97%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207280000&dgm=%E9%98%AA%E7%A5%9E%E5%B0%BC%E5%B4%8E%E9%A7%85%E5%8C%97%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E9%98%AA%E7%A5%9E%E5%B0%BC%E5%B4%8E%E9%A7%85%E5%8C%97%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=96",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E9%98%AA%E7%A5%9E%E5%B0%BC%E5%B4%8E%E9%A7%85%E5%8C%97%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207280000&dgm=%E9%98%AA%E7%A5%9E%E5%B0%BC%E5%B4%8E%E9%A7%85%E5%8C%97%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E9%98%AA%E7%A5%9E%E5%B0%BC%E5%B4%8E%E9%A7%85%E5%8C%97%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=96",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%91%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207280000&dgm=%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%91%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%91%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2022",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%93%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207280000&dgm=%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%93%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%93%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A3%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2035",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%94%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=undefined&tosk=&dt=202207280000&dgm=%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%94%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E6%AD%A6%E5%BA%AB%E4%B9%8B%E8%8D%98%EF%BC%94%E4%B8%81%E7%9B%AE%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2023",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E9%95%B7%E6%B4%B2%E6%9C%AC%E9%80%9A%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207280000&dgm=%E9%95%B7%E6%B4%B2%E6%9C%AC%E9%80%9A%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E9%95%B7%E6%B4%B2%E6%9C%AC%E9%80%9A%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2166",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E5%B0%BC%E5%B4%8E%E8%A5%BF%E6%B6%88%E9%98%B2%E7%BD%B2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207280000&dgm=%E5%B0%BC%E5%B4%8E%E8%A5%BF%E6%B6%88%E9%98%B2%E7%BD%B2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E5%B0%BC%E5%B4%8E%E8%A5%BF%E6%B6%88%E9%98%B2%E7%BD%B2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=123",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E5%B0%BC%E5%B4%8E%E8%A5%BF%E6%B6%88%E9%98%B2%E7%BD%B2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202207280000&dgm=%E5%B0%BC%E5%B4%8E%E8%A5%BF%E6%B6%88%E9%98%B2%E7%BD%B2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E5%B0%BC%E5%B4%8E%E8%A5%BF%E6%B6%88%E9%98%B2%E7%BD%B2%E5%89%8D%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=123",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E6%B0%B4%E5%A0%82%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202208010000&dgm=%E6%B0%B4%E5%A0%82%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E6%B0%B4%E5%A0%82%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=129",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E6%B0%B4%E5%A0%82%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202208010000&dgm=%E6%B0%B4%E5%A0%82%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E6%B0%B4%E5%A0%82%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A2%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=129",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E5%8C%97%E5%9B%B3%E6%9B%B8%E9%A4%A8%EF%BC%88%E5%B0%BC%E5%B4%8E%E5%B8%82%EF%BC%89%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=&tosk=&dt=202208010000&dgm=%E5%8C%97%E5%9B%B3%E6%9B%B8%E9%A4%A8%EF%BC%88%E5%B0%BC%E5%B4%8E%E5%B8%82%EF%BC%89%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E5%8C%97%E5%9B%B3%E6%9B%B8%E9%A4%A8%EF%BC%88%E5%B0%BC%E5%B4%8E%E5%B8%82%EF%BC%89%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=2041",
    "https://rosen.hanshin-bus.co.jp/busstatedtl?mode=4&fr=%E9%98%AA%E7%A5%9E%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95&frsk=B&tosk=&dt=202302030000&dgm=%E9%98%AA%E7%A5%9E%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A&dgmpl=%E9%98%AA%E7%A5%9E%E5%B0%BC%E5%B4%8E%EF%BC%BB%E5%8D%97%EF%BC%BD%E3%80%94%E9%98%AA%E7%A5%9E%E3%83%90%E3%82%B9%E3%80%95%3A1%3A1&p=0%2C8%2C9&IncludeHankyu=0&pole_station_code=93"
]
console.log("次に追加する際の番号は、阪神バス：" + URLs.length + "です。");

const URLs_K = [
    "Error",
    "http://blsetup.city.kyoto.jp/blsp/show.php?sid=abe314191ff5d5c270f1fbd60ec40055",
    "http://blsetup.city.kyoto.jp/blsp/show.php?sid=56fc148c50307f9f9728df33143821a0",
    "http://blsetup.city.kyoto.jp/blsp/show.php?sid=fb779254b5c66065b44301447ed51a1f",
    "http://blsetup.city.kyoto.jp/blsp/show.php?sid=544d39bb6ff2880d89d290cf9c27f901",
    "http://blsetup.city.kyoto.jp/blsp/show.php?sid=509c18dd9372e7b6360c320df4d07aca"
]
console.log("次に追加する際の番号は、京都市営バス：" + URLs_K.length + "です。");

window.addEventListener("DOMContentLoaded", () => {
    const element = document.createElement("div");
    element.classList.add("animation2", "hidden");
    document.body.appendChild(element);
    const animation2sec = Number(window.getComputedStyle(element).getPropertyValue("animation").split(" ")[0].replace("s", ""));

    const div = document.querySelectorAll("div.busstop > div");
    const triangle = document.querySelectorAll("div.busstop div.triangle");
    const h2 = document.querySelectorAll("div.busstop h2");
    const alphabetStr = "ABCDE";//ABCDEFGHIJKLMNOPQRSTUVWXYZ
    const alphabets = alphabetStr.split("");

    if (div.length !== h2.length) {
        console.warn("h2.length and div.length are different.");
    }

    for (let i = 0; i < h2.length; i++) {
        h2[i].addEventListener("click", () => {
            triangle[i].classList.toggle("triangle--transform");
            if (div[i].classList.contains("hidden")) {
                div[i].classList.remove("hidden");
                div[i].classList.add("animation1");
            } else {
                div[i].classList.add("animation2");
                setTimeout(() => {
                    div[i].classList.add("hidden");
                    div[i].classList.remove("animation2");
                }, animation2sec * 1000)
            }
        })
        div[i].addEventListener("animationend", () => {
            div[i].classList.remove("animation1");
        })
    }

    const td_kyoto = document.querySelectorAll("td.systemNumber");
    for (let element of td_kyoto) {
        let items = element.innerHTML.split(",");
        const array = [];
        for (let item of items) {
            if (item == " ") {
                array.push(" ")
            } else if (Number(item)) {
                const number = Number(item);
                if (number >= 200) array.push(`<span class="bus200">${number}</span>`)
                else if (number >= 10) array.push(`<span class="bus10">${number}</span>`)
                else if (number >= 0) array.push(`<span class="bus0">${number}</span>`)
            } else {
                array.push(`<span class="busstop">${item}</span>`);
            }
        }
        element.innerHTML = array.join("");
    }

    const td_hanshin = document.querySelectorAll("table.hanshin td");
    for (let element of td_hanshin) {
        let innerHTML = element.innerHTML;
        const match = innerHTML.match(/\(/g);
        const max = match === null ? 0 : match.length;
        for (let i = 0; i < max; i++) {
            const text = innerHTML.substring(innerHTML.indexOf("(") + 1, innerHTML.indexOf(")"));
            const items = text.split(",");
            const array = [];
            for (let item of items) {
                array.push(`<span class="hanshinBus">${item}</span>`);
            }
            innerHTML = innerHTML.replace("(" + text + ")", array.join(""))
        }
        element.innerHTML = innerHTML;

    }

    const allTd = document.querySelectorAll("td");
    for (let td of allTd) {
        td.style.cursor = "pointer";
    }

    const table_kyoto = document.querySelectorAll("table.kyoto");
    const imgArray = document.querySelectorAll("img.map");
    if (window.innerWidth >= 1000) {
        for (let i = 0; i < table_kyoto.length; i++) {
            const img = imgArray[i];
            const element = table_kyoto[i].firstElementChild.firstElementChild;
            const td = document.createElement("td");
            td.setAttribute("rowSpan", table_kyoto[i].firstElementChild.children.length);
            const img_src = img.getAttribute("src");
            td.classList.add("map");
            td.style.backgroundImage = `url("${img_src}")`;
            img.remove();
            element.appendChild(td);
        }
    }
})