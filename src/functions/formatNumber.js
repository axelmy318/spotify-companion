export const formatNumber = ( num ) => {
    // String with formatted number
    var totalStr = '';
    // Convert number to string
    var numStr = num + '';
    // Separate number on before point and after
    var parts = numStr.split( '.' );
    // Save length of rounded number
    var numLen = parts[0].length;
    // Start iterating numStr chars
    for ( var i = 0; i < numLen; i++ ) {
      // Position of digit from end of string
      var y = numLen - i;
  
      // If y is divided without remainder on 3...
      if ( i > 0 && y % 3 == 0 ) {
          // add aposrtoph when greater than 6 digit
          // or add point when smaller than 6 digit
          totalStr += y >= 6 ? '\'' : '\'';
      }
  
      // Append current position digit to total string
      totalStr += parts[0].charAt(i);
    }
    // Return total formatted string with float part of number (or '.00' when haven't float part)
    return totalStr
  }