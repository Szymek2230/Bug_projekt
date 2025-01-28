ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([638542.295454, 509885.280622, 686734.613277, 539640.385944]);
var wms_layers = [];

var format_vmapa_shp_0 = new ol.format.GeoJSON();
var features_vmapa_shp_0 = format_vmapa_shp_0.readFeatures(json_vmapa_shp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_vmapa_shp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmapa_shp_0.addFeatures(features_vmapa_shp_0);
var lyr_vmapa_shp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmapa_shp_0, 
                style: style_vmapa_shp_0,
                popuplayertitle: 'vmapa_shp',
                interactive: true,
                title: '<img src="styles/legend/vmapa_shp_0.png" /> vmapa_shp'
            });
var format_historyczna_shp_1 = new ol.format.GeoJSON();
var features_historyczna_shp_1 = format_historyczna_shp_1.readFeatures(json_historyczna_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_historyczna_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_historyczna_shp_1.addFeatures(features_historyczna_shp_1);
var lyr_historyczna_shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_historyczna_shp_1, 
                style: style_historyczna_shp_1,
                popuplayertitle: 'historyczna_shp',
                interactive: true,
                title: '<img src="styles/legend/historyczna_shp_1.png" /> historyczna_shp'
            });
var format_landsat_shp_2 = new ol.format.GeoJSON();
var features_landsat_shp_2 = format_landsat_shp_2.readFeatures(json_landsat_shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_landsat_shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landsat_shp_2.addFeatures(features_landsat_shp_2);
var lyr_landsat_shp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landsat_shp_2, 
                style: style_landsat_shp_2,
                popuplayertitle: 'landsat_shp',
                interactive: true,
                title: '<img src="styles/legend/landsat_shp_2.png" /> landsat_shp'
            });
var format_obszar_rzeki_kiedykolwiek_3 = new ol.format.GeoJSON();
var features_obszar_rzeki_kiedykolwiek_3 = format_obszar_rzeki_kiedykolwiek_3.readFeatures(json_obszar_rzeki_kiedykolwiek_3, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_obszar_rzeki_kiedykolwiek_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_obszar_rzeki_kiedykolwiek_3.addFeatures(features_obszar_rzeki_kiedykolwiek_3);
var lyr_obszar_rzeki_kiedykolwiek_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_obszar_rzeki_kiedykolwiek_3, 
                style: style_obszar_rzeki_kiedykolwiek_3,
                popuplayertitle: 'obszar_rzeki_kiedykolwiek',
                interactive: true,
                title: '<img src="styles/legend/obszar_rzeki_kiedykolwiek_3.png" /> obszar_rzeki_kiedykolwiek'
            });
var format_obszar_rzeki_zawsze_4 = new ol.format.GeoJSON();
var features_obszar_rzeki_zawsze_4 = format_obszar_rzeki_zawsze_4.readFeatures(json_obszar_rzeki_zawsze_4, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_obszar_rzeki_zawsze_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_obszar_rzeki_zawsze_4.addFeatures(features_obszar_rzeki_zawsze_4);
var lyr_obszar_rzeki_zawsze_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_obszar_rzeki_zawsze_4, 
                style: style_obszar_rzeki_zawsze_4,
                popuplayertitle: 'obszar_rzeki_zawsze',
                interactive: true,
                title: '<img src="styles/legend/obszar_rzeki_zawsze_4.png" /> obszar_rzeki_zawsze'
            });
var format_A_hex_5 = new ol.format.GeoJSON();
var features_A_hex_5 = format_A_hex_5.readFeatures(json_A_hex_5, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_A_hex_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_hex_5.addFeatures(features_A_hex_5);
var lyr_A_hex_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A_hex_5, 
                style: style_A_hex_5,
                popuplayertitle: 'A_hex',
                interactive: true,
    title: 'A_hex<br />\
    <img src="styles/legend/A_hex_5_0.png" /> <br />\
    <img src="styles/legend/A_hex_5_1.png" /> -96<br />\
    <img src="styles/legend/A_hex_5_2.png" /> -94<br />\
    <img src="styles/legend/A_hex_5_3.png" /> -93<br />\
    <img src="styles/legend/A_hex_5_4.png" /> -91<br />\
    <img src="styles/legend/A_hex_5_5.png" /> -90<br />\
    <img src="styles/legend/A_hex_5_6.png" /> -89<br />\
    <img src="styles/legend/A_hex_5_7.png" /> -87<br />\
    <img src="styles/legend/A_hex_5_8.png" /> -85<br />\
    <img src="styles/legend/A_hex_5_9.png" /> -84<br />\
    <img src="styles/legend/A_hex_5_10.png" /> -83<br />\
    <img src="styles/legend/A_hex_5_11.png" /> -82<br />\
    <img src="styles/legend/A_hex_5_12.png" /> -79<br />\
    <img src="styles/legend/A_hex_5_13.png" /> -78<br />\
    <img src="styles/legend/A_hex_5_14.png" /> -77<br />\
    <img src="styles/legend/A_hex_5_15.png" /> -75<br />\
    <img src="styles/legend/A_hex_5_16.png" /> -73<br />\
    <img src="styles/legend/A_hex_5_17.png" /> -72<br />\
    <img src="styles/legend/A_hex_5_18.png" /> -70<br />\
    <img src="styles/legend/A_hex_5_19.png" /> -69<br />\
    <img src="styles/legend/A_hex_5_20.png" /> -68<br />\
    <img src="styles/legend/A_hex_5_21.png" /> -67<br />\
    <img src="styles/legend/A_hex_5_22.png" /> -66<br />\
    <img src="styles/legend/A_hex_5_23.png" /> -65<br />\
    <img src="styles/legend/A_hex_5_24.png" /> -64<br />\
    <img src="styles/legend/A_hex_5_25.png" /> -63<br />\
    <img src="styles/legend/A_hex_5_26.png" /> -62<br />\
    <img src="styles/legend/A_hex_5_27.png" /> -61<br />\
    <img src="styles/legend/A_hex_5_28.png" /> -60<br />\
    <img src="styles/legend/A_hex_5_29.png" /> -59<br />\
    <img src="styles/legend/A_hex_5_30.png" /> -58<br />\
    <img src="styles/legend/A_hex_5_31.png" /> -57<br />\
    <img src="styles/legend/A_hex_5_32.png" /> -56<br />\
    <img src="styles/legend/A_hex_5_33.png" /> -55<br />\
    <img src="styles/legend/A_hex_5_34.png" /> -54<br />\
    <img src="styles/legend/A_hex_5_35.png" /> -53<br />\
    <img src="styles/legend/A_hex_5_36.png" /> -52<br />\
    <img src="styles/legend/A_hex_5_37.png" /> -51<br />\
    <img src="styles/legend/A_hex_5_38.png" /> -50<br />\
    <img src="styles/legend/A_hex_5_39.png" /> -49<br />\
    <img src="styles/legend/A_hex_5_40.png" /> -48<br />\
    <img src="styles/legend/A_hex_5_41.png" /> -47<br />\
    <img src="styles/legend/A_hex_5_42.png" /> -46<br />\
    <img src="styles/legend/A_hex_5_43.png" /> -45<br />\
    <img src="styles/legend/A_hex_5_44.png" /> -44<br />\
    <img src="styles/legend/A_hex_5_45.png" /> -43<br />\
    <img src="styles/legend/A_hex_5_46.png" /> -42<br />\
    <img src="styles/legend/A_hex_5_47.png" /> -41<br />\
    <img src="styles/legend/A_hex_5_48.png" /> -40<br />\
    <img src="styles/legend/A_hex_5_49.png" /> -39<br />\
    <img src="styles/legend/A_hex_5_50.png" /> -38<br />\
    <img src="styles/legend/A_hex_5_51.png" /> -37<br />\
    <img src="styles/legend/A_hex_5_52.png" /> -36<br />\
    <img src="styles/legend/A_hex_5_53.png" /> -35<br />\
    <img src="styles/legend/A_hex_5_54.png" /> -34<br />\
    <img src="styles/legend/A_hex_5_55.png" /> -33<br />\
    <img src="styles/legend/A_hex_5_56.png" /> -32<br />\
    <img src="styles/legend/A_hex_5_57.png" /> -31<br />\
    <img src="styles/legend/A_hex_5_58.png" /> -30<br />\
    <img src="styles/legend/A_hex_5_59.png" /> -29<br />\
    <img src="styles/legend/A_hex_5_60.png" /> -28<br />\
    <img src="styles/legend/A_hex_5_61.png" /> -27<br />\
    <img src="styles/legend/A_hex_5_62.png" /> -26<br />\
    <img src="styles/legend/A_hex_5_63.png" /> -25<br />\
    <img src="styles/legend/A_hex_5_64.png" /> -24<br />\
    <img src="styles/legend/A_hex_5_65.png" /> -23<br />\
    <img src="styles/legend/A_hex_5_66.png" /> -22<br />\
    <img src="styles/legend/A_hex_5_67.png" /> -21<br />\
    <img src="styles/legend/A_hex_5_68.png" /> -20<br />\
    <img src="styles/legend/A_hex_5_69.png" /> -19<br />\
    <img src="styles/legend/A_hex_5_70.png" /> -18<br />\
    <img src="styles/legend/A_hex_5_71.png" /> -17<br />\
    <img src="styles/legend/A_hex_5_72.png" /> -16<br />\
    <img src="styles/legend/A_hex_5_73.png" /> -15<br />\
    <img src="styles/legend/A_hex_5_74.png" /> -14<br />\
    <img src="styles/legend/A_hex_5_75.png" /> -13<br />\
    <img src="styles/legend/A_hex_5_76.png" /> -12<br />\
    <img src="styles/legend/A_hex_5_77.png" /> -11<br />\
    <img src="styles/legend/A_hex_5_78.png" /> -10<br />\
    <img src="styles/legend/A_hex_5_79.png" /> -9<br />\
    <img src="styles/legend/A_hex_5_80.png" /> -8<br />\
    <img src="styles/legend/A_hex_5_81.png" /> -7<br />\
    <img src="styles/legend/A_hex_5_82.png" /> -6<br />\
    <img src="styles/legend/A_hex_5_83.png" /> -5<br />\
    <img src="styles/legend/A_hex_5_84.png" /> -4<br />\
    <img src="styles/legend/A_hex_5_85.png" /> -3<br />\
    <img src="styles/legend/A_hex_5_86.png" /> -2<br />\
    <img src="styles/legend/A_hex_5_87.png" /> -1<br />\
    <img src="styles/legend/A_hex_5_88.png" /> 0<br />\
    <img src="styles/legend/A_hex_5_89.png" /> 1<br />\
    <img src="styles/legend/A_hex_5_90.png" /> 2<br />\
    <img src="styles/legend/A_hex_5_91.png" /> 3<br />\
    <img src="styles/legend/A_hex_5_92.png" /> 4<br />\
    <img src="styles/legend/A_hex_5_93.png" /> 5<br />\
    <img src="styles/legend/A_hex_5_94.png" /> 6<br />\
    <img src="styles/legend/A_hex_5_95.png" /> 7<br />\
    <img src="styles/legend/A_hex_5_96.png" /> 8<br />\
    <img src="styles/legend/A_hex_5_97.png" /> 9<br />\
    <img src="styles/legend/A_hex_5_98.png" /> 10<br />\
    <img src="styles/legend/A_hex_5_99.png" /> 11<br />\
    <img src="styles/legend/A_hex_5_100.png" /> 12<br />\
    <img src="styles/legend/A_hex_5_101.png" /> 13<br />\
    <img src="styles/legend/A_hex_5_102.png" /> 14<br />\
    <img src="styles/legend/A_hex_5_103.png" /> 15<br />\
    <img src="styles/legend/A_hex_5_104.png" /> 16<br />\
    <img src="styles/legend/A_hex_5_105.png" /> 17<br />\
    <img src="styles/legend/A_hex_5_106.png" /> 18<br />\
    <img src="styles/legend/A_hex_5_107.png" /> 19<br />\
    <img src="styles/legend/A_hex_5_108.png" /> 20<br />\
    <img src="styles/legend/A_hex_5_109.png" /> 21<br />\
    <img src="styles/legend/A_hex_5_110.png" /> 22<br />\
    <img src="styles/legend/A_hex_5_111.png" /> 23<br />\
    <img src="styles/legend/A_hex_5_112.png" /> 24<br />\
    <img src="styles/legend/A_hex_5_113.png" /> 25<br />\
    <img src="styles/legend/A_hex_5_114.png" /> 26<br />\
    <img src="styles/legend/A_hex_5_115.png" /> 27<br />\
    <img src="styles/legend/A_hex_5_116.png" /> 28<br />\
    <img src="styles/legend/A_hex_5_117.png" /> 29<br />\
    <img src="styles/legend/A_hex_5_118.png" /> 30<br />\
    <img src="styles/legend/A_hex_5_119.png" /> 31<br />\
    <img src="styles/legend/A_hex_5_120.png" /> 32<br />\
    <img src="styles/legend/A_hex_5_121.png" /> 33<br />\
    <img src="styles/legend/A_hex_5_122.png" /> 34<br />\
    <img src="styles/legend/A_hex_5_123.png" /> 35<br />\
    <img src="styles/legend/A_hex_5_124.png" /> 36<br />\
    <img src="styles/legend/A_hex_5_125.png" /> 37<br />\
    <img src="styles/legend/A_hex_5_126.png" /> 38<br />\
    <img src="styles/legend/A_hex_5_127.png" /> 39<br />\
    <img src="styles/legend/A_hex_5_128.png" /> 40<br />\
    <img src="styles/legend/A_hex_5_129.png" /> 41<br />\
    <img src="styles/legend/A_hex_5_130.png" /> 42<br />\
    <img src="styles/legend/A_hex_5_131.png" /> 43<br />\
    <img src="styles/legend/A_hex_5_132.png" /> 44<br />\
    <img src="styles/legend/A_hex_5_133.png" /> 45<br />\
    <img src="styles/legend/A_hex_5_134.png" /> 46<br />\
    <img src="styles/legend/A_hex_5_135.png" /> 47<br />\
    <img src="styles/legend/A_hex_5_136.png" /> 48<br />\
    <img src="styles/legend/A_hex_5_137.png" /> 49<br />\
    <img src="styles/legend/A_hex_5_138.png" /> 50<br />\
    <img src="styles/legend/A_hex_5_139.png" /> 51<br />\
    <img src="styles/legend/A_hex_5_140.png" /> 52<br />\
    <img src="styles/legend/A_hex_5_141.png" /> 53<br />\
    <img src="styles/legend/A_hex_5_142.png" /> 54<br />\
    <img src="styles/legend/A_hex_5_143.png" /> 55<br />\
    <img src="styles/legend/A_hex_5_144.png" /> 56<br />\
    <img src="styles/legend/A_hex_5_145.png" /> 57<br />\
    <img src="styles/legend/A_hex_5_146.png" /> 58<br />\
    <img src="styles/legend/A_hex_5_147.png" /> 59<br />\
    <img src="styles/legend/A_hex_5_148.png" /> 60<br />\
    <img src="styles/legend/A_hex_5_149.png" /> 61<br />\
    <img src="styles/legend/A_hex_5_150.png" /> 62<br />\
    <img src="styles/legend/A_hex_5_151.png" /> 63<br />\
    <img src="styles/legend/A_hex_5_152.png" /> 64<br />\
    <img src="styles/legend/A_hex_5_153.png" /> 65<br />\
    <img src="styles/legend/A_hex_5_154.png" /> 66<br />\
    <img src="styles/legend/A_hex_5_155.png" /> 67<br />\
    <img src="styles/legend/A_hex_5_156.png" /> 70<br />\
    <img src="styles/legend/A_hex_5_157.png" /> 71<br />\
    <img src="styles/legend/A_hex_5_158.png" /> 72<br />\
    <img src="styles/legend/A_hex_5_159.png" /> 73<br />\
    <img src="styles/legend/A_hex_5_160.png" /> 74<br />\
    <img src="styles/legend/A_hex_5_161.png" /> 75<br />\
    <img src="styles/legend/A_hex_5_162.png" /> 77<br />\
    <img src="styles/legend/A_hex_5_163.png" /> 80<br />\
    <img src="styles/legend/A_hex_5_164.png" /> 82<br />\
    <img src="styles/legend/A_hex_5_165.png" /> 83<br />\
    <img src="styles/legend/A_hex_5_166.png" /> 84<br />\
    <img src="styles/legend/A_hex_5_167.png" /> 87<br />\
    <img src="styles/legend/A_hex_5_168.png" /> 89<br />\
    <img src="styles/legend/A_hex_5_169.png" /> 90<br />\
    <img src="styles/legend/A_hex_5_170.png" /> 91<br />\
    <img src="styles/legend/A_hex_5_171.png" /> 92<br />\
    <img src="styles/legend/A_hex_5_172.png" /> 93<br />\
    <img src="styles/legend/A_hex_5_173.png" /> 94<br />\
    <img src="styles/legend/A_hex_5_174.png" /> 96<br />\
    <img src="styles/legend/A_hex_5_175.png" /> 98<br />\
    <img src="styles/legend/A_hex_5_176.png" /> 99<br />'
        });
var format_B_hex_6 = new ol.format.GeoJSON();
var features_B_hex_6 = format_B_hex_6.readFeatures(json_B_hex_6, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_B_hex_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B_hex_6.addFeatures(features_B_hex_6);
var lyr_B_hex_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B_hex_6, 
                style: style_B_hex_6,
                popuplayertitle: 'B_hex',
                interactive: true,
    title: 'B_hex<br />\
    <img src="styles/legend/B_hex_6_0.png" /> -100<br />\
    <img src="styles/legend/B_hex_6_1.png" /> -99<br />\
    <img src="styles/legend/B_hex_6_2.png" /> -98<br />\
    <img src="styles/legend/B_hex_6_3.png" /> -96<br />\
    <img src="styles/legend/B_hex_6_4.png" /> -91<br />\
    <img src="styles/legend/B_hex_6_5.png" /> -90<br />\
    <img src="styles/legend/B_hex_6_6.png" /> -89<br />\
    <img src="styles/legend/B_hex_6_7.png" /> -88<br />\
    <img src="styles/legend/B_hex_6_8.png" /> -87<br />\
    <img src="styles/legend/B_hex_6_9.png" /> -85<br />\
    <img src="styles/legend/B_hex_6_10.png" /> -83<br />\
    <img src="styles/legend/B_hex_6_11.png" /> -80<br />\
    <img src="styles/legend/B_hex_6_12.png" /> -78<br />\
    <img src="styles/legend/B_hex_6_13.png" /> -77<br />\
    <img src="styles/legend/B_hex_6_14.png" /> -76<br />\
    <img src="styles/legend/B_hex_6_15.png" /> -75<br />\
    <img src="styles/legend/B_hex_6_16.png" /> -73<br />\
    <img src="styles/legend/B_hex_6_17.png" /> -72<br />\
    <img src="styles/legend/B_hex_6_18.png" /> -71<br />\
    <img src="styles/legend/B_hex_6_19.png" /> -70<br />\
    <img src="styles/legend/B_hex_6_20.png" /> -69<br />\
    <img src="styles/legend/B_hex_6_21.png" /> -68<br />\
    <img src="styles/legend/B_hex_6_22.png" /> -67<br />\
    <img src="styles/legend/B_hex_6_23.png" /> -66<br />\
    <img src="styles/legend/B_hex_6_24.png" /> -65<br />\
    <img src="styles/legend/B_hex_6_25.png" /> -64<br />\
    <img src="styles/legend/B_hex_6_26.png" /> -63<br />\
    <img src="styles/legend/B_hex_6_27.png" /> -62<br />\
    <img src="styles/legend/B_hex_6_28.png" /> -61<br />\
    <img src="styles/legend/B_hex_6_29.png" /> -60<br />\
    <img src="styles/legend/B_hex_6_30.png" /> -59<br />\
    <img src="styles/legend/B_hex_6_31.png" /> -58<br />\
    <img src="styles/legend/B_hex_6_32.png" /> -57<br />\
    <img src="styles/legend/B_hex_6_33.png" /> -56<br />\
    <img src="styles/legend/B_hex_6_34.png" /> -55<br />\
    <img src="styles/legend/B_hex_6_35.png" /> -54<br />\
    <img src="styles/legend/B_hex_6_36.png" /> -53<br />\
    <img src="styles/legend/B_hex_6_37.png" /> -52<br />\
    <img src="styles/legend/B_hex_6_38.png" /> -51<br />\
    <img src="styles/legend/B_hex_6_39.png" /> -50<br />\
    <img src="styles/legend/B_hex_6_40.png" /> -49<br />\
    <img src="styles/legend/B_hex_6_41.png" /> -48<br />\
    <img src="styles/legend/B_hex_6_42.png" /> -47<br />\
    <img src="styles/legend/B_hex_6_43.png" /> -46<br />\
    <img src="styles/legend/B_hex_6_44.png" /> -45<br />\
    <img src="styles/legend/B_hex_6_45.png" /> -44<br />\
    <img src="styles/legend/B_hex_6_46.png" /> -43<br />\
    <img src="styles/legend/B_hex_6_47.png" /> -42<br />\
    <img src="styles/legend/B_hex_6_48.png" /> -41<br />\
    <img src="styles/legend/B_hex_6_49.png" /> -40<br />\
    <img src="styles/legend/B_hex_6_50.png" /> -39<br />\
    <img src="styles/legend/B_hex_6_51.png" /> -38<br />\
    <img src="styles/legend/B_hex_6_52.png" /> -37<br />\
    <img src="styles/legend/B_hex_6_53.png" /> -36<br />\
    <img src="styles/legend/B_hex_6_54.png" /> -35<br />\
    <img src="styles/legend/B_hex_6_55.png" /> -34<br />\
    <img src="styles/legend/B_hex_6_56.png" /> -33<br />\
    <img src="styles/legend/B_hex_6_57.png" /> -32<br />\
    <img src="styles/legend/B_hex_6_58.png" /> -31<br />\
    <img src="styles/legend/B_hex_6_59.png" /> -30<br />\
    <img src="styles/legend/B_hex_6_60.png" /> -29<br />\
    <img src="styles/legend/B_hex_6_61.png" /> -28<br />\
    <img src="styles/legend/B_hex_6_62.png" /> -27<br />\
    <img src="styles/legend/B_hex_6_63.png" /> -26<br />\
    <img src="styles/legend/B_hex_6_64.png" /> -25<br />\
    <img src="styles/legend/B_hex_6_65.png" /> -24<br />\
    <img src="styles/legend/B_hex_6_66.png" /> -23<br />\
    <img src="styles/legend/B_hex_6_67.png" /> -22<br />\
    <img src="styles/legend/B_hex_6_68.png" /> -21<br />\
    <img src="styles/legend/B_hex_6_69.png" /> -20<br />\
    <img src="styles/legend/B_hex_6_70.png" /> -19<br />\
    <img src="styles/legend/B_hex_6_71.png" /> -18<br />\
    <img src="styles/legend/B_hex_6_72.png" /> -17<br />\
    <img src="styles/legend/B_hex_6_73.png" /> -16<br />\
    <img src="styles/legend/B_hex_6_74.png" /> -15<br />\
    <img src="styles/legend/B_hex_6_75.png" /> -14<br />\
    <img src="styles/legend/B_hex_6_76.png" /> -13<br />\
    <img src="styles/legend/B_hex_6_77.png" /> -12<br />\
    <img src="styles/legend/B_hex_6_78.png" /> -11<br />\
    <img src="styles/legend/B_hex_6_79.png" /> -10<br />\
    <img src="styles/legend/B_hex_6_80.png" /> -9<br />\
    <img src="styles/legend/B_hex_6_81.png" /> -8<br />\
    <img src="styles/legend/B_hex_6_82.png" /> -7<br />\
    <img src="styles/legend/B_hex_6_83.png" /> -6<br />\
    <img src="styles/legend/B_hex_6_84.png" /> -5<br />\
    <img src="styles/legend/B_hex_6_85.png" /> -4<br />\
    <img src="styles/legend/B_hex_6_86.png" /> -3<br />\
    <img src="styles/legend/B_hex_6_87.png" /> -2<br />\
    <img src="styles/legend/B_hex_6_88.png" /> -1<br />\
    <img src="styles/legend/B_hex_6_89.png" /> 0<br />\
    <img src="styles/legend/B_hex_6_90.png" /> 1<br />\
    <img src="styles/legend/B_hex_6_91.png" /> 2<br />\
    <img src="styles/legend/B_hex_6_92.png" /> 3<br />\
    <img src="styles/legend/B_hex_6_93.png" /> 4<br />\
    <img src="styles/legend/B_hex_6_94.png" /> 5<br />\
    <img src="styles/legend/B_hex_6_95.png" /> 6<br />\
    <img src="styles/legend/B_hex_6_96.png" /> 7<br />\
    <img src="styles/legend/B_hex_6_97.png" /> 8<br />\
    <img src="styles/legend/B_hex_6_98.png" /> 9<br />\
    <img src="styles/legend/B_hex_6_99.png" /> 10<br />\
    <img src="styles/legend/B_hex_6_100.png" /> 11<br />\
    <img src="styles/legend/B_hex_6_101.png" /> 12<br />\
    <img src="styles/legend/B_hex_6_102.png" /> 13<br />\
    <img src="styles/legend/B_hex_6_103.png" /> 14<br />\
    <img src="styles/legend/B_hex_6_104.png" /> 15<br />\
    <img src="styles/legend/B_hex_6_105.png" /> 16<br />\
    <img src="styles/legend/B_hex_6_106.png" /> 17<br />\
    <img src="styles/legend/B_hex_6_107.png" /> 18<br />\
    <img src="styles/legend/B_hex_6_108.png" /> 19<br />\
    <img src="styles/legend/B_hex_6_109.png" /> 20<br />\
    <img src="styles/legend/B_hex_6_110.png" /> 21<br />\
    <img src="styles/legend/B_hex_6_111.png" /> 22<br />\
    <img src="styles/legend/B_hex_6_112.png" /> 23<br />\
    <img src="styles/legend/B_hex_6_113.png" /> 24<br />\
    <img src="styles/legend/B_hex_6_114.png" /> 25<br />\
    <img src="styles/legend/B_hex_6_115.png" /> 26<br />\
    <img src="styles/legend/B_hex_6_116.png" /> 27<br />\
    <img src="styles/legend/B_hex_6_117.png" /> 28<br />\
    <img src="styles/legend/B_hex_6_118.png" /> 29<br />\
    <img src="styles/legend/B_hex_6_119.png" /> 30<br />\
    <img src="styles/legend/B_hex_6_120.png" /> 31<br />\
    <img src="styles/legend/B_hex_6_121.png" /> 32<br />\
    <img src="styles/legend/B_hex_6_122.png" /> 33<br />\
    <img src="styles/legend/B_hex_6_123.png" /> 34<br />\
    <img src="styles/legend/B_hex_6_124.png" /> 37<br />\
    <img src="styles/legend/B_hex_6_125.png" /> 38<br />\
    <img src="styles/legend/B_hex_6_126.png" /> 39<br />\
    <img src="styles/legend/B_hex_6_127.png" /> 40<br />\
    <img src="styles/legend/B_hex_6_128.png" /> 42<br />\
    <img src="styles/legend/B_hex_6_129.png" /> 43<br />\
    <img src="styles/legend/B_hex_6_130.png" /> 44<br />\
    <img src="styles/legend/B_hex_6_131.png" /> 45<br />\
    <img src="styles/legend/B_hex_6_132.png" /> 46<br />\
    <img src="styles/legend/B_hex_6_133.png" /> 47<br />\
    <img src="styles/legend/B_hex_6_134.png" /> 48<br />\
    <img src="styles/legend/B_hex_6_135.png" /> 50<br />\
    <img src="styles/legend/B_hex_6_136.png" /> 51<br />\
    <img src="styles/legend/B_hex_6_137.png" /> 52<br />\
    <img src="styles/legend/B_hex_6_138.png" /> 53<br />\
    <img src="styles/legend/B_hex_6_139.png" /> 54<br />\
    <img src="styles/legend/B_hex_6_140.png" /> 56<br />\
    <img src="styles/legend/B_hex_6_141.png" /> 57<br />\
    <img src="styles/legend/B_hex_6_142.png" /> 58<br />\
    <img src="styles/legend/B_hex_6_143.png" /> 59<br />\
    <img src="styles/legend/B_hex_6_144.png" /> 60<br />\
    <img src="styles/legend/B_hex_6_145.png" /> 61<br />\
    <img src="styles/legend/B_hex_6_146.png" /> 62<br />\
    <img src="styles/legend/B_hex_6_147.png" /> 65<br />\
    <img src="styles/legend/B_hex_6_148.png" /> 66<br />\
    <img src="styles/legend/B_hex_6_149.png" /> 68<br />\
    <img src="styles/legend/B_hex_6_150.png" /> 70<br />\
    <img src="styles/legend/B_hex_6_151.png" /> 76<br />\
    <img src="styles/legend/B_hex_6_152.png" /> 78<br />\
    <img src="styles/legend/B_hex_6_153.png" /> 86<br />\
    <img src="styles/legend/B_hex_6_154.png" /> 92<br />\
    <img src="styles/legend/B_hex_6_155.png" /> 94<br />\
    <img src="styles/legend/B_hex_6_156.png" /> 100<br />\
    <img src="styles/legend/B_hex_6_157.png" /> <br />'
        });

lyr_vmapa_shp_0.setVisible(true);lyr_historyczna_shp_1.setVisible(true);lyr_landsat_shp_2.setVisible(true);lyr_obszar_rzeki_kiedykolwiek_3.setVisible(true);lyr_obszar_rzeki_zawsze_4.setVisible(true);lyr_A_hex_5.setVisible(true);lyr_B_hex_6.setVisible(true);
var layersList = [lyr_vmapa_shp_0,lyr_historyczna_shp_1,lyr_landsat_shp_2,lyr_obszar_rzeki_kiedykolwiek_3,lyr_obszar_rzeki_zawsze_4,lyr_A_hex_5,lyr_B_hex_6];
lyr_vmapa_shp_0.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obw': 'obw', });
lyr_historyczna_shp_1.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'obwod': 'obwod', 'pow_1': 'pow_1', 'pow2': 'pow2', 'obw': 'obw', });
lyr_landsat_shp_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obw': 'obw', });
lyr_obszar_rzeki_kiedykolwiek_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_RasterT_Slice__buforowe': 'FID_RasterT_Slice__buforowe', 'Id': 'Id', 'gridcode': 'gridcode', 'pow': 'pow', 'obw': 'obw', 'FID_caly_bug': 'FID_caly_bug', 'Id_1': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'obwod': 'obwod', 'pow_1': 'pow_1', 'pow2': 'pow2', 'obw_1': 'obw', 'FID_HYDRO_WODY_POW_ExportFeature': 'FID_HYDRO_WODY_POW_ExportFeature', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID', 'pow_12': 'pow', 'obw_12': 'obw', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_obszar_rzeki_zawsze_4.set('fieldAliases', {'FID_caly_b': 'FID_caly_b', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'obwod': 'obwod', 'pow_1': 'pow_1', 'pow2': 'pow2', 'obw': 'obw', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'pow': 'pow', 'obw_1': 'obw_1', 'FID_Raster': 'FID_Raster', 'Id_12': 'Id_12', 'gridcode': 'gridcode', 'pow_12': 'pow_12', 'obw_12': 'obw_12', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_A_hex_5.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'B_A': 'B_A', 'wysokosc': 'wysokosc', 'Field': 'Field', });
lyr_B_hex_6.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'C_B': 'C_B', });
lyr_vmapa_shp_0.set('fieldImages', {'DLUG_BRZEG': '', 'DLUGOSC': '', 'DOKLADNOSC': '', 'DOSTEPNOSC': '', 'GLEBOKOSC': '', 'ISTNIENIE': '', 'KAT_HYDRO': '', 'KAT_PLYWU': '', 'KAT_POJEMN': '', 'KAT_POLOZ': '', 'KAT_WODY': '', 'NAJW_WYS': '', 'NAZWA': '', 'OBIEKT': '', 'OPR_UPUST': '', 'OPR_ZBURZ': '', 'POCH_HYDRO': '', 'PRED_PRZEP': '', 'SREDNIA_GL': '', 'STAT_EKSPL': '', 'SZEROKOSC': '', 'TAJNOSC': '', 'TYP_AKWED': '', 'TYP_WYBRZ': '', 'ZN_ORIENT': '', 'POWIERZCHN': '', 'ID': '', 'Shape_Leng': '', 'Shape_Area': '', 'pow': '', 'obw': '', });
lyr_historyczna_shp_1.set('fieldImages', {'Id': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', 'obwod': '', 'pow_1': '', 'pow2': '', 'obw': '', });
lyr_landsat_shp_2.set('fieldImages', {'Id': '', 'gridcode': '', 'Shape_Leng': '', 'Shape_Area': '', 'pow': '', 'obw': '', });
lyr_obszar_rzeki_kiedykolwiek_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_RasterT_Slice__buforowe': 'Range', 'Id': 'Range', 'gridcode': 'Range', 'pow': 'TextEdit', 'obw': 'TextEdit', 'FID_caly_bug': 'Range', 'Id_1': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'obwod': 'TextEdit', 'pow_1': 'TextEdit', 'pow2': 'TextEdit', 'obw_1': 'TextEdit', 'FID_HYDRO_WODY_POW_ExportFeature': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'Range', 'pow_12': 'TextEdit', 'obw_12': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_obszar_rzeki_zawsze_4.set('fieldImages', {'FID_caly_b': '', 'Id': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'obwod': '', 'pow_1': '', 'pow2': '', 'obw': '', 'FID_HYDRO_': '', 'DLUG_BRZEG': '', 'DLUGOSC': '', 'DOKLADNOSC': '', 'DOSTEPNOSC': '', 'GLEBOKOSC': '', 'ISTNIENIE': '', 'KAT_HYDRO': '', 'KAT_PLYWU': '', 'KAT_POJEMN': '', 'KAT_POLOZ': '', 'KAT_WODY': '', 'NAJW_WYS': '', 'NAZWA': '', 'OBIEKT': '', 'OPR_UPUST': '', 'OPR_ZBURZ': '', 'POCH_HYDRO': '', 'PRED_PRZEP': '', 'SREDNIA_GL': '', 'STAT_EKSPL': '', 'SZEROKOSC': '', 'TAJNOSC': '', 'TYP_AKWED': '', 'TYP_WYBRZ': '', 'ZN_ORIENT': '', 'POWIERZCHN': '', 'ID_1': '', 'pow': '', 'obw_1': '', 'FID_Raster': '', 'Id_12': '', 'gridcode': '', 'pow_12': '', 'obw_12': '', 'Shape_Le_2': '', 'Shape_Area': '', });
lyr_A_hex_5.set('fieldImages', {'Id': 'Range', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'B_A': 'TextEdit', 'wysokosc': 'TextEdit', 'Field': 'TextEdit', });
lyr_B_hex_6.set('fieldImages', {'Id': 'Range', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'C_B': 'TextEdit', });
lyr_vmapa_shp_0.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'inline label - always visible', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pow': 'no label', 'obw': 'no label', });
lyr_historyczna_shp_1.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'obwod': 'no label', 'pow_1': 'no label', 'pow2': 'no label', 'obw': 'no label', });
lyr_landsat_shp_2.set('fieldLabels', {'Id': 'inline label - always visible', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pow': 'no label', 'obw': 'no label', });
lyr_obszar_rzeki_kiedykolwiek_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_RasterT_Slice__buforowe': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'pow': 'no label', 'obw': 'no label', 'FID_caly_bug': 'no label', 'Id_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'obwod': 'no label', 'pow_1': 'no label', 'pow2': 'no label', 'obw_1': 'no label', 'FID_HYDRO_WODY_POW_ExportFeature': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'pow_12': 'no label', 'obw_12': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_obszar_rzeki_zawsze_4.set('fieldLabels', {'FID_caly_b': 'no label', 'Id': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'obwod': 'no label', 'pow_1': 'no label', 'pow2': 'no label', 'obw': 'no label', 'FID_HYDRO_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'pow': 'no label', 'obw_1': 'no label', 'FID_Raster': 'no label', 'Id_12': 'no label', 'gridcode': 'no label', 'pow_12': 'no label', 'obw_12': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_A_hex_5.set('fieldLabels', {'Id': 'no label', 'GRID_ID': 'inline label - always visible', 'PERCENTAGE': 'no label', 'B_A': 'no label', 'wysokosc': 'no label', 'Field': 'no label', });
lyr_B_hex_6.set('fieldLabels', {'Id': 'inline label - always visible', 'GRID_ID': 'no label', 'PERCENTAGE': 'no label', 'C_B': 'no label', });
lyr_B_hex_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});