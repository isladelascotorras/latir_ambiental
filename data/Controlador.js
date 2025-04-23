/**
 * Created by toranzo on 11/01/2016.
 */
var map = L.map("map", {
  zoomControl: true,
  maxZoom: 18,
  minZoom: 10,
  Zoom: 15,
  fullscreenControl: { pseudoFullscreen: false },
}).fitBounds([
  [21.6610729474, -82.9455969459],
  [21.9811843475, -82.4582417155],
]);
var hash = new L.Hash(map);
var additional_attrib =
  '<a href="https://isladelascotorras.github.io/latir_ambiental/" title="Latir Ambiental en Isla de la Juventud"><img src="data/turnat.png" alt="Turnat" width="60" height="15"></a>';
var feature_group = new L.featureGroup([]);
var route = new L.featureGroup([]);
// http://localhost/maps/{z}/{x}/{y}.jpg
//http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
var basemap = L.tileLayer("../img/maps/{z}/{x}/{y}.jpg", {
  attribution: additional_attrib,
});
basemap.addTo(map);

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
// icons
var horario = L.control.sidebar("horario", {
  closeButton: true,
  title: "Información",
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
// -(<i class="mdi mdi-bus fa-lg "></i>);
L.easyButton(
  '<i class="mdi mdi-information-variant fa-lg "></i>',
  function (btn, map) {
    ayuda.hide();
    contacto.hide();
    horario.setContent(
      '<table ><tr scope="row"><td colspan=3><h2 style="text-align: center;">Rutas de Turnat</h2></td></tr></table></br>&nbsp;</br><div><img width=25 src="./data/pdf.png"><a class="pdf" target="_blank" href="./data/Rutas.pdf"> Descarga <span> Rutas.pdf</span></br>&nbsp;</br></a></div>'
    );
    horario.show();
  }
).addTo(map);

L.easyButton('<i class="mdi mdi-help fa-lg "></i>', function (btn, map) {
  horario.hide();
  contacto.hide();
  ayuda.setContent(
    '<h2 style="text-align: center;">Ayuda</h2><img src="data/turnat.png"></br></br>1. Muestra el listado de las Rutas Animadas.</br>2. Botón de Animar las Rutas por Paradas.</br>3. Icono que se activará una vez que la Ruta sea Animada mostrando la Parada y Número de la Ruta.</br>4. Línea de las Rutas Animadas en el mapa geográfico, representada en azul.</br>5. Nombre de la Parada que se activará una vez que el icono de la parada sea activada.</br>6. Línea de las Rutas representadas en el mapa geográfico.</br>7. Ayuda de la Página Web.</br>8. Contacto de Autores.</br>&nbsp;</br>'
  );
  ayuda.show();
}).addTo(map);

L.easyButton('<i class="mdi mdi-contacts fa-lg "></i>', function (btn, map) {
  horario.hide();
  ayuda.hide();
  contacto.setContent(
    '<table style="text-align: center; font: 16px Arial,Helvetica,sans-serif;" width=326><tr><td><h2>Contáctenos</h2></td></tr><tr><td><img class="aligncenter" src="data/turnat.png"></td></tr><tr><td>Especialista en Investigación, Innovación y Desarrollo</td></tr><tr><td>Ing. Guillermo Toranzo Pérez</td></tr><tr><td>Teléfono Celular: +53 58885007</td></tr><tr><td>Teléfono Fijo: +53 46323792</td></tr><tr><td>Email: <a href="mailto:guilletp87@gmail.com">guilletp87@gmail.com</a></td></tr><tr><td>&nbsp;</td></tr><tr><td></td></tr><tr><td>Dirección: Calle 1ra # 407 e/ 4ta y 6ta, </td></tr><tr><td>Reparto Delio Chacón, MEIJ</td></tr><tr><td>&nbsp;</td></tr></table>'
  );
  contacto.show();
}).addTo(map);
//----------------------------------------------------------------
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

var json_cocodrilera_1 = new L.geoJson(cocodrilera_i, {
  onEachFeature: pop_Ruta,
  style: doStyle,
  color: "#fdbf6f",
});
feature_group.addLayer(json_cocodrilera_1);

var json_cuevaleclerc_2 = new L.geoJson(cuevaleclerc_i, {
  onEachFeature: pop_Ruta,
  style: doStyle,
  color: "#fdbf6f",
});
feature_group.addLayer(json_cuevaleclerc_2);

var json_descubreelmar_3 = new L.geoJson(descubreelmar_i, {
  onEachFeature: pop_Ruta,
  style: doStyle,
  color: "#b2df8a",
});
feature_group.addLayer(json_descubreelmar_3);

var json_duna_4 = new L.geoJson(duna_i, {
  onEachFeature: pop_Ruta,
  style: doStyle,
  color: "#fdbf6f",
});
feature_group.addLayer(json_duna_4);

var json_entrepinos_5 = new L.geoJson(entrepinos_i, {
  onEachFeature: pop_Ruta,
  style: doStyle,
  color: "#b2df8a",
});
feature_group.addLayer(json_entrepinos_5);

var json_jacksonville_6 = new L.geoJson(jacksonville_i, {
  onEachFeature: pop_Ruta,
  color: "#b2df8a",
  style: doStyle,
});
feature_group.addLayer(json_jacksonville_6);

var json_jungla_7 = new L.geoJson(jungla_i, {
  onEachFeature: pop_Ruta,
  color: "#fdbf6f",
  style: doStyle,
});
feature_group.addLayer(json_jungla_7);

var json_puntaeste_8 = new L.geoJson(puntaeste_i, {
  onEachFeature: pop_Ruta,
  color: "#b2df8a",
  style: doStyle,
});
feature_group.addLayer(json_puntaeste_8);

var json_santuariocotorras_9 = new L.geoJson(santuariocotorras_i, {
  onEachFeature: pop_Ruta,
  color: "#fdbf6f",
  style: doStyle,
});
feature_group.addLayer(json_santuariocotorras_9);

var json_sierracanyada_10 = new L.geoJson(sierracanyada_i, {
  onEachFeature: pop_Ruta,
  color: "#fdbf6f",
  style: doStyle,
});
feature_group.addLayer(json_sierracanyada_10);
// ------------------------------------------------------
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
        json_descubreelmar_3,
        descubreelmar_i,
        descubreelmar_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_descubreelmar_3
      );
      break;

    case "2":
      ruta(
        json_entrepinos_5,
        entrepinos_i,
        entrepinos_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_entrepinos_5
      );
      break;

    case "3":
      ruta(
        json_jacksonville_6,
        jacksonville_i,
        jacksonville_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_jacksonville_6
      );
      break;

    case "4":
      ruta(
        json_puntaeste_8,
        puntaeste_i,
        puntaeste_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_puntaeste_8
      );
      break;

    case "5":
      ruta(
        json_santuariocotorras_9,
        santuariocotorras_i,
        santuariocotorras_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_santuariocotorras_9
      );
      break;

    case "6":
      ruta(
        json_sierracanyada_10,
        sierracanyada_i,
        sierracanyada_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_sierracanyada_10
      );
      break;

    case "7":
      ruta(
        json_jungla_7,
        jungla_i,
        jungla_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_jungla_7
      );
      break;

    case "8":
      ruta(
        json_cuevaleclerc_2,
        cuevaleclerc_i,
        cuevaleclerc_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_cuevaleclerc_2
      );
      break;

    case "9":
      ruta(
        json_cocodrilera_1,
        cocodrilera_i,
        cocodrilera_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_cocodrilera_1
      );
      break;

    case "10":
      ruta(
        json_duna_4,
        duna_i,
        duna_p,
        new LeafIcon({ iconUrl: "leaflet/images/marker-icon-2x.png" }),
        nparadas.P_json_duna_4
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
