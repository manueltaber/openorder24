import {Area} from '../classes/area';

export {getMockAreas};

function getMockAreas() {
  let mockAreas: Area[] = [];
  for (let mockArea of MOCKAREAS) {
    let area: Area = new Area();
    area.nr = mockArea['nr'];
    area.desc = mockArea['desc'];
    area.x = mockArea['x'];
    area.y = mockArea['y'];
    area.z = mockArea['z'];
    area.width = mockArea['width'];
    area.height = mockArea['height'];
    mockAreas.push(area);
  }
  return mockAreas;
}

var MOCKAREAS = [
  { 'nr': 1,  'desc': 'Tisch 1',  'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 2,  'desc': 'Tisch 2',  'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 3,  'desc': 'Tisch 3',  'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 4,  'desc': 'Tisch 4',  'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 5,  'desc': 'Tisch 5',  'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 6,  'desc': 'Tisch 6',  'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 7,  'desc': 'Tisch 7',  'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 8,  'desc': 'Tisch 8',  'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 9,  'desc': 'Tisch 9',  'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 10, 'desc': 'Tisch 10', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 11, 'desc': 'Tisch 11', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 12, 'desc': 'Tisch 12', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 13, 'desc': 'Tisch 13', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 14, 'desc': 'Tisch 14', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 15, 'desc': 'Tisch 15', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 16, 'desc': 'Tisch 16', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 17, 'desc': 'Tisch 17', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 18, 'desc': 'Tisch 18', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 19, 'desc': 'Tisch 19', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 20, 'desc': 'Tisch 20', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 21, 'desc': 'Tisch 21', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 22, 'desc': 'Tisch 22', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 23, 'desc': 'Tisch 23', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 24, 'desc': 'Tisch 24', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 25, 'desc': 'Tisch 25', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 26, 'desc': 'Tisch 26', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 27, 'desc': 'Tisch 27', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 28, 'desc': 'Tisch 28', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 29, 'desc': 'Tisch 29', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
  { 'nr': 30, 'desc': 'Tisch 30', 'x': 0, 'y': 0, 'z': 0, 'width': 0, 'height': 0 },
];
