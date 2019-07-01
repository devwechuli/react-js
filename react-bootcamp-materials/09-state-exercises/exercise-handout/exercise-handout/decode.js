
if(port ===1){
// decoded.A = "It's Raining";
	decoded.B_Voltage   = DecodeUint8(bytes, 0) / 10 + "v";
	decoded.C_Pluvio    = DecodeUint16(bytes, 1) / 1000000 + "mm";
  //decoded.D_Bins      = uint8(bytes.slice(2, 35));  // use bytes 2 thru 34
//	decoded.D_Bins   = DecodedUint8(bytes, 2-34);
	decoded.E_TempIn    = DecodeInt8(bytes, 35) + "°C";
	decoded.F_TempOut   = DecodeInt16(bytes, 36) / 100 + "°C";
	decoded.G_RelHum    = DecodeUint8(bytes, 38) + "%";
	decoded.H_BarPress  = DecodeUint16(bytes, 39) / 10 + "hPa";
	decoded.I_WindSpeed = DecodeUint8(bytes, 41) / 1000+ "m/s";
	decoded.J_Counter   = DecodeUint8(bytes, 42) + "Drops";
	decoded.K_Evapo     = DecodeUint16(bytes, 43) / 1000000 + "kg";
	decoded.L_SoilMoist = DecodeUint16(bytes, 45) / 32767 * 100  + "%";
  } else if(port === 10) {
	decoded.A = "No Rain";
	decoded.B_Voltage   = DecodeUint8(bytes, 0) / 10 + "v";
	decoded.C_TempIn    = DecodeInt8(bytes, 1) + "°C";
	decoded.D_TempOut   = DecodeInt16(bytes, 2) / 100 + "°C";
	decoded.E_RelHum    = DecodeUint8(bytes, 4) + "%";
	decoded.F_BarPress  = DecodeUint16(bytes, 5) / 10 + "hPa";
	decoded.G_WindSpeed = DecodeUint8(bytes, 7) / 100000 + "m/s";
	decoded.H_Evapo     = DecodeUint16(bytes, 8) /1000000 + "kg"; //= 65536/2*10kg
    decoded.I_SoilMoist = DecodeUint16(bytes, 10) / 32767 * 100 + "%"; 
  }