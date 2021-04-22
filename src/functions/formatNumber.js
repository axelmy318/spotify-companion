export const formatNumber = ( num ) => {
    var totalStr = '';
    var numStr = num + '';
    var parts = numStr.split( '.' );
    var numLen = parts[0].length;
    for ( var i = 0; i < numLen; i++ ) {
      var y = numLen - i;
  
      if ( i > 0 && y % 3 === 0 ) {
          totalStr += y >= 6 ? '\'' : '\'';
      }
      totalStr += parts[0].charAt(i);
    }
    return totalStr
  }