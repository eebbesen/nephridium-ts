const arcgisHelper = require('../../../../src/app/lib/util/arcgisHelper')

const data: JSON = JSON.parse(
  '{"objectIdFieldName":"OBJECTID","uniqueIdField":{"name":"OBJECTID","isSystemMaintained":true},"globalIdFieldName":"","geometryType":"esriGeometryPoint","spatialReference":{"wkid":4326,"latestWkid":4326},"fields":[{"name":"OBJECTID","type":"esriFieldTypeOID","alias":"OBJECTID","sqlType":"sqlTypeOther","domain":null,"defaultValue":null},{"name":"SERVICE_NUMBER","type":"esriFieldTypeInteger","alias":"Service Number","sqlType":"sqlTypeOther","domain":null,"defaultValue":null},{"name":"REQUEST_DATE","type":"esriFieldTypeDate","alias":"Request Date","sqlType":"sqlTypeOther","length":8,"domain":null,"defaultValue":null},{"name":"REGEX","type":"esriFieldTypeString","alias":"Location","sqlType":"sqlTypeOther","length":4000,"domain":null,"defaultValue":null},{"name":"WARD","type":"esriFieldTypeString","alias":"Ward","sqlType":"sqlTypeOther","length":12,"domain":null,"defaultValue":null},{"name":"DISTRICT_COUNCIL","type":"esriFieldTypeInteger","alias":"District Council","sqlType":"sqlTypeOther","domain":null,"defaultValue":null},{"name":"STATUS","type":"esriFieldTypeString","alias":"Status","sqlType":"sqlTypeOther","length":80,"domain":null,"defaultValue":null},{"name":"REQUEST_TYPE","type":"esriFieldTypeString","alias":"Request Type","sqlType":"sqlTypeOther","length":80,"domain":null,"defaultValue":null},{"name":"REQUEST_DESCRIPTION","type":"esriFieldTypeString","alias":"Request Description","sqlType":"sqlTypeOther","length":80,"domain":null,"defaultValue":null},{"name":"SEE_CLICK_FIX_SITE","type":"esriFieldTypeString","alias":"SeeClickFix Submission","sqlType":"sqlTypeOther","length":4000,"domain":null,"defaultValue":null},{"name":"LATITUE","type":"esriFieldTypeString","alias":"Latitude","sqlType":"sqlTypeOther","length":16,"domain":null,"defaultValue":null},{"name":"LONGITUTE","type":"esriFieldTypeString","alias":"Longtitude","sqlType":"sqlTypeOther","length":16,"domain":null,"defaultValue":null},{"name":"MAP_LOCATION","type":"esriFieldTypeString","alias":"Map Location","sqlType":"sqlTypeOther","length":35,"domain":null,"defaultValue":null},{"name":"COUNT_","type":"esriFieldTypeDouble","alias":"Count","sqlType":"sqlTypeOther","domain":null,"defaultValue":null},{"name":"PROPX","type":"esriFieldTypeDouble","alias":"PROPX","sqlType":"sqlTypeOther","domain":null,"defaultValue":null},{"name":"PROPY","type":"esriFieldTypeDouble","alias":"PROPY","sqlType":"sqlTypeOther","domain":null,"defaultValue":null}],"exceededTransferLimit":true,"features":[{"attributes":{"OBJECTID":1,"SERVICE_NUMBER":4041371,"REQUEST_DATE":1420156800000,"REGEX":"514 THOMAS AVE ","WARD":"1","DISTRICT_COUNCIL":7,"STATUS":"Resolved","REQUEST_TYPE":"Complaint","REQUEST_DESCRIPTION":"Snow Walk","SEE_CLICK_FIX_SITE":"No","LATITUE":"44.95922482","LONGITUTE":"-93.12176762","MAP_LOCATION":"(44.95922482,-93.12176762)","COUNT_":1,"PROPX":567713.4009,"PROPY":161405.7836},"geometry":{"x":-93.121767624634742,"y":44.959224815911639}},{"attributes":{"OBJECTID":2,"SERVICE_NUMBER":4041373,"REQUEST_DATE":1420156800000,"REGEX":"468 THOMAS AVE ","WARD":"1","DISTRICT_COUNCIL":7,"STATUS":"Resolved","REQUEST_TYPE":"Complaint","REQUEST_DESCRIPTION":"Snow Walk","SEE_CLICK_FIX_SITE":"No","LATITUE":"44.95921912","LONGITUTE":"-93.11997635","MAP_LOCATION":"(44.95921912,-93.11997635)","COUNT_":1,"PROPX":568177.1259,"PROPY":161405.2088},"geometry":{"x":-93.119976350698465,"y":44.959219119314369}}]}',
)

describe('parseJSON', () => {
  it('returns core data', () => {
    const ret = arcgisHelper.parseJSON(data)

    expect(ret.length).toEqual(2)
    expect(ret[0].SERVICE_NUMBER).toEqual(4041371)
    expect(ret[1].SERVICE_NUMBER).toEqual(4041373)
  })
})

describe('fixURL', () => {
  it('returns a URL that will get all fields', () => {
    const url =
      'https://services.arcgis.com/zzzzz/arcgis/rest/services/311/FeatureServer'
    const ret = arcgisHelper.fixURL(url)

    expect(ret).toEqual(
      'https://services.arcgis.com/zzzzz/arcgis/rest/services/311/FeatureServer/0/query?outFields=*&where=1%3D1&resultRecordCount=30&f=json',
    )
  })
})
