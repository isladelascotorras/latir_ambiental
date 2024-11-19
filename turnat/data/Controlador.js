/**
 * Created by toranzo on 11/01/2016.
 */
var map = L.map("map", {
  zoomControl: true,
  maxZoom: 17,
  minZoom: 10,
  Zoom: 15,
  fullscreenControl: { pseudoFullscreen: false },
}).fitBounds([
  [21.6610729474, -82.9455969459],
  [21.9811843475, -82.4582417155],
]);
var hash = new L.Hash(map);
var additional_attrib =
  '<a href="http://islaj.geocuba.cu/" title="Grupo de Desarrollo de Software"><img src="img/geoc_25x12.png"> GEOCUBA Agencia Isla de la Juventud</a>';
var feature_group = new L.featureGroup([]);
var route = new L.featureGroup([]);

//http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
var basemap_0 = L.tileLayer("http://localhost/maps/{z}/{x}/{y}.jpg", {
  attribution: additional_attrib,
});
basemap_0.addTo(map);

//------------------------------------------------------
//grupoempresarial
function pop_grupoempresarial(feature, layer) {
  var popupContent =
    '<table><tr><th scope="row">Nombre:</th><td>' +
    Autolinker.link(String(feature.properties["nombre"])) +
    '</td></tr><tr><th scope="row">Teléfono:</th><td>' +
    Autolinker.link(String(feature.properties["telef1"])) +
    '</td></tr><tr><th scope="row">Teléfono:</th><td>' +
    Autolinker.link(String(feature.properties["telef2"])) +
    '</td></tr><tr><th scope="row">Dirección:&nbsp;</th><td>' +
    Autolinker.link(String(feature.properties["direccion"])) +
    "</td></tr></table>";
  layer.bindPopup(popupContent);
}

function show_grupoempresarial(feature, latlng) {
  return L.marker(latlng, {
    icon: L.AwesomeMarkers.icon({
      icon: "factory",
      prefix: "mdi",
      markerColor: "blue",
      iconColor: "white",
    }),
  }).addTo(map);
}

var exp_grupoempresarialJSON = new L.geoJson(exp_grupoempresarial, {
  onEachFeature: pop_grupoempresarial,
  pointToLayer: show_grupoempresarial,
});

feature_group.addLayer(exp_grupoempresarialJSON);
feature_group.addTo(map);
//-------------------------------------------------------
var horario = L.control.sidebar("horario", {
  closeButton: true,
  title: "Horario",
  position: "left",
});
map.addControl(horario);

var ayuda = L.control.sidebar("ayuda", {
  closeButton: true,
  title: "Ayuda",
  position: "left",
});
map.addControl(ayuda);

var contacto = L.control.sidebar("contactos", {
  closeButton: true,
  title: "Contactos",
  position: "left",
});
map.addControl(contacto);

map.on("click", function () {
  horario.hide();
  ayuda.hide();
  contacto.hide();
});
// <i class="mdi mdi-bus fa-lg "></i>
L.easyButton(
  '<i class="mdi mdi-information-variant fa-lg "></i>',
  function (btn, map) {
    ayuda.hide();
    contacto.hide();
    horario.setContent(
      '<table ><tr scope="row"><td colspan=3><h2 style="text-align: center;">Horario de las Rutas de los Ómnibus Públicos</h2></td></tr><tr scope="row"><td colspan=3><b>201 Gerona - Patria - Resplandor - 13 de Marzo</b></td></tr><tr><td>6:00 a.m. </br></br></td><td>&nbsp;</td><td>1:00 p.m. </br>5:20 p.m. </br></td></tr><tr scope="row"><td colspan=3><b>202 Local Gerona</b></td></tr><tr><td>5:20 a.m. </br>6:30 a.m. </br>8:40 a.m. </br>10:30 a.m. </br>12:00 m. </br></br></br></td><td>&nbsp;</td><td>1:30 p.m. </br>3:00 p.m. </br>4:30 p.m. </br>6:00 p.m. </br>7:30 p.m. </br>9:00 p.m. </br>10:30 p.m. </br></td></tr><tr scope="row"><td colspan=3><b>203 Gerona - Codornices - Aeropuerto</b></td></tr><tr><td>6:30 a.m. </br></td><td>&nbsp;</td><td>5:10 p.m. </br></td></tr><tr><td colspan=3><b>204 Gerona - Chacón - Comunidad 53 - Playa</b></td></tr><tr><td>5:10 a.m. </br>6:10 a.m. </br> 7:20 a.m. </br>10:00 a.m. </br>11:20 a.m. </br></td><td>&nbsp;</td><td>1:00 p.m. </br>4:10 p.m. </br>5:30 p.m. </br> 7:00 p.m. </br>10:00 p.m. </br></td></tr><tr><td colspan=3><b>205 Local La Fé</b></td></tr><tr><td>5:20 a.m. </br>7:20 a.m. </br>8:50 a.m. </br>10:50 a.m. </br>&nbsp; </td><td>&nbsp;</td><td>12:50 p.m. </br>2:50 p.m. </br>4:50 p.m. </br>6:50 p.m. </br>7:50 p.m. </br></td></tr><tr><td colspan=3><b>431 Gerona - La Fé</b></td></tr><tr><td>5:00 a.m. Sale de La Fé</br>5:10 a.m. </br>5:45 a.m. Regresa de La Fé</br>6:00 a.m. Camello </br>7:30 a.m. </br>8:30 a.m. Camello </br>11:00 a.m. </br></br></br></td><td>&nbsp;</td><td>1:00 p.m. Camello </br>2:30 p.m. Daewoo </br>3:30 p.m. Camello </br>4:10 p.m. </br>4:30 p.m. Daewoo </br>5:20 p.m. Camello </br>6:20 p.m. </br>7:20 p.m. Camello </br>9:20 p.m. </br>11:30 p.m. </br></td></tr><tr><td colspan=3><b>432 Gerona - Aeropuerto - La Fé - No está en Operaciones</b></td></tr><tr><td>0:00 a.m. </td><td>&nbsp;</td><td>0:00 p.m. </br></td></tr><tr><td colspan=3><b>433 La Fé - La Reforma - La Isabel </b></td></tr><tr><td>4:50 a.m. (La Isabel) </br>6:30 a.m. </br>9:00 a.m. (La Isabel) </br>11:00 a.m. </br></br></br></td><td>&nbsp;</td><td>1:00 p.m. (La Isabel) </br>3:00 p.m. </br>5:00 p.m. (La Isabel) </br>7:00 p.m. </br>8:30 p.m. </br>10:30 p.m. (La Isabel) </br></td></tr><tr><td colspan=3><b>435 La Fé - La Tumbita - No está en Operaciones </b></td></tr><tr><td>0:00 a.m. </td><td>&nbsp;</td><td>0:00 p.m. </br></td></tr><tr><td colspan=3><b>436 Gerona - Tumbita - La Fé </b></td></tr><tr><td>5:10 a.m.</br>6:40 a.m. La Fé-Gerona</br>8:00 a.m. </br>11:30 a.m.</br></td><td>&nbsp;</td><td>3:00 p.m. </br>6:00 p.m. </br>10:00 p.m. </br></br></td></tr><tr><td colspan=3><b>437 La Fé - Demajagua</b></td></tr><tr><td>6:10 a.m. </br></br></td><td>&nbsp;</td><td>12:30 p.m. </br>4:10 p.m. </td></tr><tr><td colspan=3><b>438 Gerona - Playa Bibijagua - No está en Operaciones</b></td></tr><tr><td>0:00 a.m. </td><td>&nbsp;</td><td>0:00 p.m. </br></td></tr><tr><td colspan=3><b>439 Gerona - Demajagua - Atanagildo</b></td></tr><tr><td>5:20 a.m.</br>5:50 a.m. Camello </br>6:00 a.m. Daewoo </br>7:30 a.m. Comunidad 37</br>10:30 a.m. Camello </br>11:30 a.m. Daewoo </br></br></br></td><td>&nbsp;</td><td>12:30 p.m. Camello </br>1:30 p.m. Camello Comunidad 37 </br>3:30 p.m. Camello</br>4:30 p.m. Daewoo </br>5:30 p.m.</br>6:30 p.m.</br>8:00 p.m. Daewoo Comunidad 37 </br>11:30 p.m. </td></tr><tr><td colspan=3><b>440 Gerona - Argelia - Colony </b></td></tr><tr><td>4:30 a.m. Colony </br>5:00 a.m. Argelia - Gerona </br>6:00 a.m. Gerona - Victoria </br>7:00 a.m. Colony </br>9:30 a.m.</br></br></br></td><td>&nbsp;</td><td>12:20 p.m. Colony </br>1:00 p.m. Hasta la Victoria </br>3:10 p.m. Colony </br>4:10 p.m. No Regresa </br>5:20 p.m. </br>7:30 p.m. Colony </br>10:20 p.m. Colony </br></td></tr><tr><td colspan=3><b>441 Gerona - Colony - No está en Operaciones </b></td></tr><tr><td>0:00 a.m. </td><td>&nbsp;</td><td>0:00 p.m. </br></td></tr><tr><td colspan=3><b>442 Gerona - Patria - Comunidades 5 y 44 - El Tronco </b></td></tr><tr><td>5:30 a.m.</br>10:00 a.m.</br></br></td><td>&nbsp;</td><td>2:00 p.m.</br>5:10 p.m.</br>7:20 p.m.</br></td></tr><tr><td colspan=3><b>701 Gerona - Camino 29 - Libertad - Argelia </b></td></tr><tr><td>5:20 a.m. </td><td>&nbsp;</td><td>4:30 p.m. </br></td></tr><tr><td colspan=3><b>702 Gerona - Ciro Redondo - Comunidades 27 y 31 </b></td></tr><tr><td>5:30 a.m.</br>7:30 a.m.</br>11:00 a.m.</br></br></td><td>&nbsp;</td><td>1:00 p.m.</br>4:00 p.m.</br>6:00 p.m.</br>10:00 p.m.</br></td></tr><tr><td colspan=3><b>703 Gerona - Camino 29 - Entronque de la Melvis - La Mina de Oro </b></td></tr><tr><td>5:30 a.m.</br></td><td>&nbsp;</td><td>4:30 p.m.</br></td></tr><tr><td colspan=3><b>704 Gerona - Cocodrilo</b></td></tr><tr><td>6:00 a.m.</br></td><td>&nbsp;</td><td>4:30 p.m.</br></td></tr><tr><td colspan=3><b>707 La Fé - Mella Cítrico - Comunidades 41 y 49 </b></td></tr><tr><td>5:00 a.m. </br>6:30 a.m. </br>11:00 a.m. </br></br></td><td>&nbsp;</td><td>1:30 p.m. </br>4:10 p.m. </br>6:20 p.m. </br>9:30 p.m. </br></td></tr><tr><td colspan=3><b>734 La Fé - Mella Vaquero</b></td></tr><tr><td>5:00 a.m. </br>6:40 a.m. Cayo Piedra </br>11:00 a.m. </br></br></br></td><td>&nbsp;</td><td>12:40 p.m. Cayo Piedra </br>3:00 p.m. </br>5:00 p.m. Cayo Piedra </br>6:40 p.m. </br>8:30 p.m. Cayo Piedra </br>10:30 p.m. Cayo Piedra </br></td></tr><tr><td colspan=3><b>Catamarán</b></td></tr><tr><td colspan=3>Realiza transportaciones al arribo de la embarcación.</td></tr></table></br>&nbsp;</br><div><img width=25 src="img/pdf.png"><a class="pdf" target="_blank" href="img/Horario_de_las_Rutas_2018.pdf"> Descarga<span> Horario de las Rutas de los Ómnibus Públicos.pdf</span></br>&nbsp;</br></a></div>'
    );
    horario.show();
  }
).addTo(map);

L.easyButton('<i class="mdi mdi-help fa-lg "></i>', function (btn, map) {
  horario.hide();
  contacto.hide();
  ayuda.setContent(
    '<h2 style="text-align: center;">Ayuda</h2><img src="img/help-2.png"></br></br>1. Muestra el listado de las Rutas Animadas.</br>2. Botón de Animar las Rutas por Paradas.</br>3. Icono que se activará una vez que la Ruta sea Animada mostrando la Parada y Número de la Ruta.</br>4. Línea de las Rutas Animadas en el mapa geográfico, representada en azul.</br>5. Nombre de la Parada que se activará una vez que el icono de la parada sea activada.</br>6. Línea de las Rutas representadas en el mapa geográfico.</br>7. Ayuda de la Página Web.</br>8. Contacto de Autores.</br>&nbsp;</br>'
  );
  ayuda.show();
}).addTo(map);

L.easyButton('<i class="mdi mdi-contacts fa-lg "></i>', function (btn, map) {
  horario.hide();
  ayuda.hide();
  contacto.setContent(
    '<table style="text-align: center; font: 16px Arial,Helvetica,sans-serif;" width=326><tr><td><h2>Contáctenos</h2></td></tr><tr><td><img class="aligncenter" src="img/geo136x59.png"></td></tr><tr><td>Jefe de Grupo de Desarrollo de Software</td></tr><tr><td>Ing. Guillermo Toranzo Pérez</td></tr><tr><td><a href="mailto:gtoranzo@islaj.geocuba.cu">gtoranzo@islaj.geocuba.cu</a></td></tr><tr><td>&nbsp;</td></tr><tr><td>Jefe de Grupo de Gestión Productiva</td></tr><tr><td>Ing. Argelia Martín Prado</td></tr><tr><td><a href="mailto:argelia@islaj.geocuba.cu">argelia@islaj.geocuba.cu</a></td></tr><tr><td>&nbsp;</td></tr><tr><td>Director de Agencia GEOCUBA Isla de la Juventud</td></tr><tr><td>Ms. C. Ramón Sánchez Causelo</td></tr><tr><td><a href="mailto:ramon@islaj.geocuba.cu">ramon@islaj.geocuba.cu</a></td></tr><tr><td>&nbsp;</td></tr><tr><td></td></tr><tr><td>Dirección: Calle 33, esquina 14 # 1402, Nueva Gerona, MEIJ</td></tr><tr><td>Teléfonos</td></tr><tr><td>Director: 4632 4401</td></tr><tr><td>Puesto de Mando: 4632 3792</td></tr><tr><td>&nbsp;</td></tr></table></a>'
  );
  contacto.show();
}).addTo(map);

function pop_Ruta(feature, layer) {
  var popupContent =
    '<table><tr><th scope="row">Ruta:</th><td>' +
    Autolinker.link(String(feature.properties["Layer"])) +
    "</td></tr></table>";
  layer.bindPopup(popupContent);
}

function doStyle() {
  return {
    weight: 4.3,
    dashArray: "",
    opacity: 1.0,
    fillOpacity: 1.0,
  };
}

var json_cocodrilera_0 = new L.geoJson(cocodrilera_i, {
  onEachFeature: pop_Ruta,
  style: doStyle,
  color: "#7d64a1",
});
feature_group.addLayer(json_cocodrilera_0);

var json_cuevaleclerc_1 = new L.geoJson(cuevaleclerc_i, {
  onEachFeature: pop_Ruta,
  style: doStyle,
  color: "#9d8d65",
});
feature_group.addLayer(json_cuevaleclerc_1);

var json_descubreelmar_2 = new L.geoJson(descubreelmar_i, {
  onEachFeature: pop_Ruta,
  style: doStyle,
  color: "#475a82",
});
feature_group.addLayer(json_descubreelmar_2);

var json_duna_3 = new L.geoJson(duna_i, {
  onEachFeature: pop_Ruta,
  style: doStyle,
  color: "#a17685",
});
feature_group.addLayer(json_duna_3);

var json_entrepinos_4 = new L.geoJson(entrepinos_i, {
  onEachFeature: pop_Ruta,
  style: doStyle,
  color: "#c7a568",
});
feature_group.addLayer(json_entrepinos_4);

var json_jacksonville_5 = new L.geoJson(jacksonville_i, {
  onEachFeature: pop_Ruta,
  color: "#b7eeab",
  style: doStyle,
});
feature_group.addLayer(json_jacksonville_5);

var json_jungla_6 = new L.geoJson(jungla_i, {
  onEachFeature: pop_Ruta,
  color: "#c72cad",
  style: doStyle,
});
feature_group.addLayer(json_jungla_6);

var json_puntaeste_7 = new L.geoJson(puntaeste_i, {
  onEachFeature: pop_Ruta,
  color: "#543c90",
  style: doStyle,
});
feature_group.addLayer(json_puntaeste_7);

var json_santuariocotorras_8 = new L.geoJson(santuariocotorras_i, {
  onEachFeature: pop_Ruta,
  color: "#885411",
  style: doStyle,
});
feature_group.addLayer(json_santuariocotorras_8);

var json_sierracaada_9 = new L.geoJson(sierracaada_i, {
  onEachFeature: pop_Ruta,
  color: "#18d31f",
  style: doStyle,
});
feature_group.addLayer(json_sierracaada_9);

// animar
feature_group.addTo(map);
function animar() {
  var LeafIcon = L.Icon.extend({
    options: {
      shadowUrl: "leaflet/images/marker-shadow.png",
      iconSize: [25, 41],
      shadowSize: [41, 41],
      iconAnchor: [12, 41],
      popupAnchor: [-1, -34],
    },
  });
  switch (document.forms[0].rutas.value) {
    case "1":
      ruta(
        json_cocodrilera_0,
        cocodrilera_i,
        cocodrilera_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_cocodrilera_0
      );
      break;

    case "2":
      ruta(
        json_cuevaleclerc_1,
        cuevaleclerc_i,
        cuevaleclerc_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_cuevaleclerc_1
      );
      break;

    case "3":
      ruta(
        json_descubreelmar_2,
        descubreelmar_i,
        descubreelmar_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_descubreelmar_2
      );
      break;

    case "4":
      ruta(
        json_duna_3,
        duna_i,
        duna_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_duna_3
      );
      break;

    case "5":
      ruta(
        json_entrepinos_4,
        entrepinos_i,
        entrepinos_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_entrepinos_4
      );
      break;

    case "6":
      ruta(
        json_jacksonville_5,
        jacksonville_i,
        jacksonville_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_jacksonville_5
      );
      break;

    case "7":
      ruta(
        json_jungla_6,
        jungla_i,
        jungla_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_jungla_6
      );
      break;

    case "8":
      ruta(
        json_puntaeste_7,
        puntaeste_i,
        puntaeste_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_puntaeste_7
      );
      break;

    case "9":
      ruta(
        json_santuariocotorras_8,
        santuariocotorras_i,
        santuariocotorras_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_santuariocotorras_8
      );
      break;

    case "10":
      ruta(
        json_sierracaada_9,
        sierracaada_i,
        sierracaada_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_sierracaada_9
      );
      break;

    default:
      alert("¡Seleccione una ruta!");
  }
}
function ruta(recorrido, rec, paradas, icon, np) {
  map.removeLayer(route);
  route = new L.featureGroup([]);
  var list = [];
  for (
    var i = 0, len = rec.features[0].geometry.coordinates.length;
    i < len;
    i++
  ) {
    for (
      var j = 0, lenj = paradas.features[0].geometry.coordinates.length;
      j < lenj;
      j++
    ) {
      if (
        rec.features[0].geometry.coordinates[i][1] +
          "/" +
          rec.features[0].geometry.coordinates[i][0] ===
        paradas.features[0].geometry.coordinates[j][1] +
          "/" +
          paradas.features[0].geometry.coordinates[j][0]
      ) {
        list.push(
          new L.LatLng(
            rec.features[0].geometry.coordinates[i][1],
            rec.features[0].geometry.coordinates[i][0]
          )
        );
        if (list.length !== 1) {
          route.addLayer(L.polyline(list, { color: "blue", weight: 7 }));
          list = [];
        }
        route.addLayer(
          L.marker(
            new L.LatLng(
              rec.features[0].geometry.coordinates[i][1],
              rec.features[0].geometry.coordinates[i][0]
            ),
            { icon: icon }
          ).bindPopup("<b>" + np[j] + "</b>")
        );
        break;
      }
    }
    list.push(
      new L.LatLng(
        rec.features[0].geometry.coordinates[i][1],
        rec.features[0].geometry.coordinates[i][0]
      )
    );
  }
  if (list.length !== 1) {
    route.addLayer(L.polyline(list, { color: "blue", weight: 7 }));
  }
  map.addLayer(route);
  map.fitBounds(route.getBounds());
  route.snakeIn();
  route.on("snakestart snake snakeend", function (ev) {
    //map.fitBounds(route.getBounds());
  });
}
L.control
  .scale({
    options: {
      position: "bottomleft",
      maxWidth: 100,
      metric: true,
      imperial: false,
      updateWhenIdle: false,
    },
  })
  .addTo(map);
