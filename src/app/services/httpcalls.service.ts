/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpcallsService {

  constructor(public httpClient: HttpClient) { }

  logionService(useri: any,password: any){
    const parameters ={userid:useri,upwd:password};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/blogin`, JSON.stringify(parameters));

  }
  submitboredata(uid: any,orgid: any,proId: any,packageId: any,said: any,noofbh: any,
    structType: any,
    bhno: any,bhlocation: any,
    bhlat: any,bhlon: any,
    bhchainage: any,
    bhsadte: any,bhrl: any,watertabe: any,typeofrig: any,
    typeofdrill: any,circulafliuid: any,drillOrient: any,anglewithHorizontal: any,
    bhDia: any,casingDia: any,
    casingDepth: any,soilDrillingBit: any,soilCoreBarrel: any,
    drillDepthFrom: any,drillDepthTo: any,typeOfstara: any,typeOfSample: any,
    soilDsDepthFrom: any,soilDsDepthTo: any,sptDethFrom: any,sptDepthTo: any,
    first: any,firstB: any,second: any,secondB: any,third: any,thirdB: any,total: any,totalB: any,
    sptDepthstatus: any,udsDepthFrom: any,
    udsDepthTo: any,soilSamplColor: any,soilType: any,soilDensity: any,soilVisualClassi: any,
    rockSampletype: any,rockdepthfrom: any,rockdepthto: any,
    rockrunLeng: any,rockRunTime: any,
    rockWaterLoss: any,rockPiecesLength: any,rockPiecse10: any,rockCr: any,rockrqd: any,
    rockSampleColor: any,rockWaethering: any,rockType: any,depthTermination: any,bhedate: any,
    rvRepName: any,rvRepSign: any,sarepName: any,saRepSign: any,clientRepName: any,
    clientRepSign: any,mdate: any,){
    const parameters ={user_id: uid,org_id:orgid,projectid:proId,package_id:packageId,sa_id:said,
      no_of_bh:noofbh,
      struct_type:structType,bh_no:bhno,bh_location:bhlocation,bh_chainage:bhchainage,bh_lat:bhlat,
      bh_lon:bhlon,bh_start_date:bhsadte,bh_rl:bhrl,water_table_rl:watertabe,type_of_rig:typeofrig,
      type_of_drilling:typeofdrill,circulation_fluid:circulafliuid,drill_orientation:drillOrient,
      bh_dia:bhDia,casing_dia:casingDia,angle_horizontal: anglewithHorizontal,
      casing_depth:casingDepth,drill_depth_from:drillDepthFrom,
      drill_depth_to: drillDepthTo,type_of_strata:typeOfstara,type_of_sample:typeOfSample,
      soil_ds_depth_from:soilDsDepthFrom,soil_ds_depth_to:soilDsDepthTo,soil_spt_depth_from:sptDethFrom,
      soil_spt_depth_to:sptDepthTo,soil_spt_penetration_1:first,soil_spt_blow_n_1:firstB,
      soil_spt_penetration_2:second,soil_spt_blow_n_2:secondB,soil_spt_penetration_3:third,
      soil_spt_blow_n_3:thirdB,soil_spt_penetration_total:total,soil_spt_blow_n_total: totalB,
      soil_spt_depth_status: sptDepthstatus,soil_uds_depth_from:udsDepthFrom,
      soil_uds_depth_to:udsDepthTo,soil_sample_color: soilSamplColor,soil_type:soilType,soil_density:soilDensity,
      soil_visual_classif:soilVisualClassi,drilling_bit:soilDrillingBit,
      core_barrel:soilCoreBarrel,rock_sample_type:rockSampletype,
      rock_depth_from: rockdepthfrom,rock_depth_to: rockdepthto,
      rock_run_length: rockrunLeng,
      rock_run_time:rockRunTime,rock_water_loss:rockWaterLoss,rock_pieces_length:rockPiecesLength,
      rock_pieces_10:rockPiecse10,rock_cr:rockCr,rock_rqd:rockrqd,rock_sample_color:rockSampleColor,
      rock_weathering:rockWaethering,rock_type:rockType,depth_termination:depthTermination,bh_enddate:bhedate,
      rv_rep_name:rvRepName,rv_rep_sign:rvRepSign,sa_rep_name:sarepName,sa_rep_sign:saRepSign,
      client_rep_name:clientRepName,client_rep_sign: clientRepSign,modified_date:mdate};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/submitboredata`, JSON.stringify(parameters));

  }

  submitLayer1(bhid: any,bhlaye: any,uid: any,orgid: any,projid: any,packageid: any,noholes: any,said: any,secId: any){
    const parameters ={bh_id:bhid,bh_layer:bhlaye,user_id:uid,org_id: orgid,projectid: projid,package_id:packageid,
      no_of_bh:noholes,sa_id:said,section_id: secId};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/submitboredata_web`, JSON.stringify(parameters));

  }
  submitLayer2(bhid: any,bhlayer: any,bhno: any,bhlocation: any,
    bhchainage: any,bhchainageId: any,bhlat: any,bhlon: any,typeOfcross: any,
    typeOfstr: any,typeOfBridge: any,bhsadte: any,bhrl: any,watertabe: any,typeofrig: any,
    typeOfrigother: any, drillOrient: any,bhDia: any,casingDia: any, casingDepth: any,drillbit: any,drillbitother: any,
    corebarrel: any){
    const parameters ={bh_id:bhid,bh_layer:bhlayer,bh_no:bhno,bh_location:bhlocation,
      chainage:bhchainage,chainage_id:bhchainageId,easting:bhlat,northing:bhlon,
      type_of_crossing: typeOfcross,type_of_structure: typeOfstr,type_of_bridge: typeOfBridge,
      bh_start_date:bhsadte,bh_rl:bhrl,water_table_rl:watertabe,type_of_rig:typeofrig,
      type_of_rig_other: typeOfrigother,
      drill_orientation:drillOrient,bh_dia:bhDia,casing_dia:casingDia,casing_depth:casingDepth,
      drilling_bit:drillbit,drilling_bit_other: drillbitother,
      core_barrel:corebarrel};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/submitboredata_web`, JSON.stringify(parameters));

  }

  submitLayer3(bhid: any,bhlaye: any,drillDepthFrom: any,drillDepthTo: any,typeOfstara: any,typeOfSample: any,
    soilDsDepthFrom: any,soilDsDepthTo: any,sptDethFrom: any,sptDepthTo: any,
    first: any,firstB: any,second: any,secondB: any,third: any,thirdB: any,total: any,totalB: any,
    sptDepthstatus: any,udsDepthFrom: any,
    udsDepthTo: any,soilSamplColor: any,soilType: any,soilDensity: any,soilVisualClassi: any,
    rockSampletype: any,rockrunLeng: any,rockRunTime: any,
    rockWaterLoss: any,rockPiecesLength: any,rockPiecse10: any,rockCr: any,rockrqd: any,
    rockSampleColor: any,rockWaethering: any,rockType: any,rockdepthfrom: any,rockdepthto: any){
    const parameters ={bh_id:bhid,bh_layer:bhlaye,drill_depth_from:drillDepthFrom,
      drill_depth_to: drillDepthTo,type_of_strata:typeOfstara,type_of_sample:typeOfSample,
      soil_ds_depth_from:soilDsDepthFrom,soil_ds_depth_to:soilDsDepthTo,soil_spt_depth_from:sptDethFrom,
      soil_spt_depth_to:sptDepthTo,soil_spt_penetration_1:first,soil_spt_blow_n_1:firstB,
      soil_spt_penetration_2:second,soil_spt_blow_n_2:secondB,soil_spt_penetration_3:third,
      soil_spt_blow_n_3:thirdB,soil_spt_penetration_total:total,soil_spt_blow_n_total: totalB,
      soil_spt_depth_status: sptDepthstatus,soil_uds_depth_from:udsDepthFrom,
      soil_uds_depth_to:udsDepthTo,soil_sample_color: soilSamplColor,soil_type:soilType,soil_density:soilDensity,
      soil_visual_classif:soilVisualClassi,rock_sample_type:rockSampletype,rock_run_length: rockrunLeng,
      rock_run_time:rockRunTime,rock_water_loss:rockWaterLoss,rock_pieces_length:rockPiecesLength,
      rock_pieces_10:rockPiecse10,rock_cr:rockCr,rock_rqd:rockrqd,rock_sample_color:rockSampleColor,
      rock_weathering:rockWaethering,rock_type:rockType,rock_depth_from:rockdepthfrom,
      rock_depth_to: rockdepthto};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/submitboredata_web`, JSON.stringify(parameters));

  }
  submitLayer4(bhid: any,bhlaye: any,depthTermination: any,bhedate: any,
    rvRepName: any,rvRepSign: any,sarepName: any,saRepSign: any,clientRepName: any,
    clientRepSign: any,mdate: any){
    const parameters ={bh_id:bhid,bh_layer:bhlaye,depth_termination:depthTermination,bh_enddate:bhedate,
      rv_rep_name:rvRepName,rv_rep_sign:rvRepSign,sa_rep_name:sarepName,sa_rep_sign:saRepSign,
      client_rep_name:clientRepName,client_rep_sign: clientRepSign,modified_date:mdate};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/submitboredata_web`, JSON.stringify(parameters));

  }
  getPendingBoredata(uid: any){
    const parameters ={user_id:uid};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/getPendingBoredata`, JSON.stringify(parameters));

  }

  getBoredetails(bhid: any){
    const parameters ={bh_id:bhid};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/getBoredetails`, JSON.stringify(parameters));

  }


  submitall(bhlayer: any,bhid: any){
    const parameters ={bh_layer:bhlayer,bh_id:bhid};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/submitboredata_web`, JSON.stringify(parameters));

  }
  getSubmittedBoredata(bhid: any,usertpe: any){
    const parameters ={bh_id:bhid,user_type:usertpe};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/getSubmittedBoredata`, JSON.stringify(parameters));

  }


  getAllChainagesBySectionID(sectionId: any){
    const parameters ={section_id: sectionId};
    console.log('JSON',JSON.stringify(parameters));

    return this.httpClient.post(`${environment.apiUrl}/getAllChainagesBySectionID`, JSON.stringify(parameters));

  }


  getAllChainages(){

    return this.httpClient.get(`${environment.apiUrl}/getAllChainages`);

  }



}
