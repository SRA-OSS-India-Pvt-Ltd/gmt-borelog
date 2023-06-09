/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpcallsService {
  constructor(public httpClient: HttpClient) {}

  logionService(useri: any, password: any, device_id: any,
    device_type: any,
    user_token_key: any
) {
    const parameters = { userid: useri, upwd: password,
      device_id: device_id,
      device_type: device_type,
      user_token_key: user_token_key

     };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/blogin`,
      JSON.stringify(parameters)
    );
  }
  submitboredata(
    uid: any,
    orgid: any,
    proId: any,
    packageId: any,
    said: any,
    secid: any,
    bhno: any,
    bhchainage: any,
    chainageid: any,
    east: any,
    north: any,
    latitu: any,
    longitu: any,
    typeOfcross: any,
    typeofstru: any,
    typeofbridge: any,
    bhsadte: any,
    bhrl: any,
    typeofrig: any,
    rigother: any,
    drillOrient: any,
    bhDia: any,
    bhDiaOther: any,
    casingDia: any,
    casingDiaOther: any,
    casingDepth: any,
    soilDrillingBit: any,
    drillbitother: any,
    soilCoreBarrel: any,
    anglewithHorizontal: any,
    boreholepic1: any,
    boreholepic2: any,
    boreholepic3: any,

    watertabe: any,
   depthTermination: any,
    bhedate: any,
    rvRepName: any,
    rvRepSign: any,

    sarepName: any,
    saRepSign: any,
    clientRepName: any,
    clientRepSign: any,
    mdate: any,
    depthpic1: any,
    depthpic2: any,
    depthpic3: any,
    samplepic1: any,
    samplepic2: any,
    samplepc3: any

  ) {
    const parameters = {
      user_id: uid,
      org_id: orgid,
      projectid: proId,
      package_id: packageId,
      no_of_bh: '',
      sa_id: said,
      section_id: secid,
      bh_no: bhno,
      chainage: bhchainage,
      chainage_id: chainageid,
      easting: east,
      northing: north,
      latitude: latitu,
      longitude: longitu,
      type_of_crossing: typeOfcross,
      type_of_structure: typeofstru,
      type_of_bridge: typeofbridge,
      bh_start_date: bhsadte,
      bh_rl: bhrl,
      type_of_rig: typeofrig,
      type_of_rig_other: rigother,
      drill_orientation: drillOrient,
      bh_dia: bhDia,
      bh_dia_other: bhDiaOther,
      casing_dia: casingDia,
      casing_dia_other: casingDiaOther,
      casing_depth: casingDepth,

      drilling_bit: soilDrillingBit,
      drilling_bit_other: drillbitother,
      core_barrel: soilCoreBarrel,

      angle_horizontal: anglewithHorizontal,

      water_table_rl: watertabe,
      depth_termination: depthTermination,
      bh_enddate: bhedate,
      sa_rep_name: sarepName,
      sa_rep_sign: saRepSign,
      rv_rep_name: rvRepName,
      rv_rep_sign: rvRepSign,

      client_rep_name: clientRepName,
      client_rep_sign: clientRepSign,

      modified_date: mdate,
      depth_termination_pic1: depthpic1,
      depth_termination_pic2: depthpic2,
      depth_termination_pic3: depthpic3,

      sample_pic1: samplepic1,
      sample_pic2: samplepic2,
      sample_pic3: samplepc3,

      borehole_pic1: boreholepic1,
      borehole_pic2: boreholepic2,
      borehole_pic3: boreholepic3};
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/submitboredata`,
      JSON.stringify(parameters)
    );
  }

  submitboreiterations(bhid: any, itr: any=[]) {
    const parameters = { bh_id: bhid, iterations: itr };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/submitbore_iterations`,
      JSON.stringify(parameters)
    );
  }

  submitLayer1(
    bhid: any,
    bhlaye: any,
    uid: any,
    orgid: any,
    projid: any,
    packageid: any,
    noholes: any,
    said: any,
    secId: any
  ) {
    const parameters = {
      bh_id: bhid,
      bh_layer: bhlaye,
      user_id: uid,
      org_id: orgid,
      projectid: projid,
      package_id: packageid,
      no_of_bh: noholes,
      sa_id: said,
      section_id: secId,
    };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/submitboredata_web`,
      JSON.stringify(parameters)
    );
  }
  submitLayer2(
    bhid: any,
    bhlayer: any,
    bhno: any,
    bhchainage: any,
    bhchainageId: any,
    bhlat: any,
    bhlon: any,
    latitu: any,
    longitu: any,
    typeOfcross: any,
    typeOfstr: any,
    typeOfBridge: any,
    bhsadte: any,
    bhrl: any,
    typeofrig: any,
    typeOfrigother: any,
    drillOrient: any,
    bhDia: any,
    bhdiaOther: any,
    casingDia: any,
    casingDiaOther: any,
    casingDepth: any,
    drillbit: any,
    drillbitother: any,
    corebarrel: any,
    angleWithHori: any,
    boreholepic1: any,
    boreholepic2: any,
    boreholepic3: any
  ) {
    const parameters = {
      bh_id: bhid,
      bh_layer: bhlayer,
      bh_no: bhno,
      chainage: bhchainage,
      chainage_id: bhchainageId,
      easting: bhlat,
      northing: bhlon,
      latitude: latitu,
      longitude: longitu,
      type_of_crossing: typeOfcross,
      type_of_structure: typeOfstr,
      type_of_bridge: typeOfBridge,
      bh_start_date: bhsadte,
      bh_rl: bhrl,
      type_of_rig: typeofrig,
      type_of_rig_other: typeOfrigother,
      drill_orientation: drillOrient,
      bh_dia: bhDia,
      bh_dia_other: bhdiaOther,
      casing_dia: casingDia,
      casing_dia_other: casingDiaOther,
      casing_depth: casingDepth,
      drilling_bit: drillbit,
      drilling_bit_other: drillbitother,
      core_barrel: corebarrel,
      angle_horizontal: angleWithHori,
      borehole_pic1: boreholepic1,
      borehole_pic2: boreholepic2,
      borehole_pic3: boreholepic3
    };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/submitboredata_web`,
      JSON.stringify(parameters)
    );
  }

  submitLayer3(
    bhid: any,
    bhlaye: any,
    drillDepthFrom: any,
    drillDepthTo: any,
    typeOfstara: any,
    typeOfSample: any,
    soilDsDepthFrom: any,
    sptDethFrom: any,
    first: any,
    firstB: any,
    second: any,
    secondB: any,
    third: any,
    thirdB: any,
    total: any,
    totalB: any,
    sptDepthstatus: any,
    udsDepthFrom: any,
    soilSamplColor: any,
    colorOther: any,
    soilVisualClassi: any,
    rockSampletype: any,
    rockdepthfrom: any,
    rockdepthto: any,
    rockrunLeng: any,
    rockRunTime: any,
    rockWaterLoss: any,
    rockCr: any,
    rockrqd: any,
    rockSampleColor: any,
    rockWaethering: any,
    iterationId: any,
    remarks: any,
    rockpiexce: any
  ) {
    const parameters = {
      bh_id: bhid,
      bh_layer: bhlaye,
      drill_depth_from: drillDepthFrom,
      drill_depth_to: drillDepthTo,
      type_of_strata: typeOfstara,
      type_of_sample: typeOfSample,
      soil_ds_depth: soilDsDepthFrom,
      soil_spt_depth: sptDethFrom,
      soil_spt_penetration_1: first,
      soil_spt_blow_n_1: firstB,
      soil_spt_penetration_2: second,
      soil_spt_blow_n_2: secondB,
      soil_spt_penetration_3: third,
      soil_spt_blow_n_3: thirdB,
      soil_spt_penetration_total: total,
      soil_spt_blow_n_total: totalB,
      soil_spt_depth_status: sptDepthstatus,
      soil_uds_depth: udsDepthFrom,
      soil_sample_color: soilSamplColor,
      soil_sample_color_other: colorOther,

      soil_visual_classif: soilVisualClassi,
      rock_sample_type: rockSampletype,
      rock_depth_from: rockdepthfrom,
      rock_depth_to: rockdepthto,
      rock_run_length: rockrunLeng,
      rock_run_time: rockRunTime,
      rock_water_loss: rockWaterLoss,
      rock_cr: rockCr,
      rock_rqd: rockrqd,
      rock_sample_color: rockSampleColor,
      rock_weathering: rockWaethering,
      bh_iteration_id: iterationId,
      soil_remarks: remarks,
      no_of_core_pieces: rockpiexce
    };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/submitboredata_web`,
      JSON.stringify(parameters)
    );
  }
  submitLayer4(
    bhid: any,
    bhlaye: any,
    watertablerl: any,
    depthTermination: any,
    bhedate: any,
    rvRepName: any,
    rvRepSign: any,
    sarepName: any,
    saRepSign: any,
    clientRepName: any,
    clientRepSign: any,
    mdate: any,
    depthterpic1: any,
    depthpic2: any,
    depthpic3: any,
    samplepic1: any,
    samplepic2: any,
    samplepic3: any
  ) {
    const parameters = {
      bh_id: bhid,
      bh_layer: bhlaye,
      water_table_rl: watertablerl,
      depth_termination: depthTermination,
      bh_enddate: bhedate,
      rv_rep_name: rvRepName,
      rv_rep_sign: rvRepSign,
      sa_rep_name: sarepName,
      sa_rep_sign: saRepSign,
      client_rep_name: clientRepName,
      client_rep_sign: clientRepSign,
      modified_date: mdate,
      depth_termination_pic1: depthterpic1,
      depth_termination_pic2: depthpic2,
      depth_termination_pic3: depthpic3,
      sample_pic1: samplepic1,
      sample_pic2: samplepic2,
      sample_pic3: samplepic3
    };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/submitboredata_web`,
      JSON.stringify(parameters)
    );
  }
  getPendingBoredata(uid: any) {
    const parameters = { user_id: uid };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/getPendingBoredata`,
      JSON.stringify(parameters)
    );
  }

  getBoredetails(bhid: any) {
    const parameters = { bh_id: bhid };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/getBoredetails`,
      JSON.stringify(parameters)
    );
  }

  submitall(bhlayer: any, bhid: any) {
    const parameters = { bh_layer: bhlayer, bh_id: bhid };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/submitboredata_web`,
      JSON.stringify(parameters)
    );
  }
  getSubmittedBoredata(bhid: any, usertpe: any) {
    const parameters = { bh_id: bhid, user_type: usertpe };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/getSubmittedBoredata`,
      JSON.stringify(parameters)
    );
  }

  getAllChainagesBySectionID(sectionId: any) {
    const parameters = { section_id: sectionId };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/getAllChainagesBySectionID`,
      JSON.stringify(parameters)
    );
  }

  getAllChainagesByUserID(uid: any) {
    const parameters = { userid: uid };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/getAllChainagesByUserID`,
      JSON.stringify(parameters)
    );
  }

  getAllChainages() {
    return this.httpClient.get(`${environment.apiUrl}/getAllChainages`);
  }
  getAllBoreIterations(bhid: any) {
    const parameters = { bh_id: bhid };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/getAllBoreIterations`,
      JSON.stringify(parameters)
    );
  }

  getSingleBoreIterationDetails(iterationId: any) {
    const parameters = { bh_iteration_id: iterationId };
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/getSingleBoreIterationDetails`,
      JSON.stringify(parameters)
    );
  }
  getSampleStatus(pid: any,packagid: any,secId: any,sta: any) {
    const parameters = { project_id: pid,package_id:packagid,section_id: secId,status: sta};
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/getSampleStatus`,
      JSON.stringify(parameters)
    );
  }
  submitSampleStatus(uid: any,bhid: any,date: any) {
    const parameters = { user_id: uid, bh_ids: bhid,samplesentdate: date};
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/submitSampleStatus`,
      JSON.stringify(parameters)
    );
  }

  getSubAgency(proId: any,pacid: any,secId: any) {
    const parameters = { project_id: proId, package_id: pacid,section_id: secId};
    console.log('JSON', JSON.stringify(parameters));

    return this.httpClient.post(
      `${environment.apiUrl}/getSubAgency`,
      JSON.stringify(parameters)
    );
  }

  validateToken(tokenid: any) {
    const parameters = {
      tokenid: tokenid,
    };

    return this.httpClient.post(
      `${environment.apiUrl}/validateToken`,

      JSON.stringify(parameters)
    );
  }
}
