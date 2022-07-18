const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
/*Create React App includes a built-in tool for measuring the real life performance of your app. 
It is called reportWebVitals 
and it measures a set of metrics that aim to capture the user experience of a web page. 
This set is called web vitals and includes:
First Contentful Paint
Largest Contentful Paint
Time To First Byte
Cumulative Layout Shift
First Input Delay*/

export default reportWebVitals;
