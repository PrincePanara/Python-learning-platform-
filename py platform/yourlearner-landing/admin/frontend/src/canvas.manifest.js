export const manifest = {
  screens: {
    scr_wum54t: { name: "Dashboard", route: "/", position: { "x": -1595.51, "y": 120.87 }, width: 1200, height: 4539 },
    scr_2cyxln: { name: "Modules", route: "/modules", position: { "x": 160, "y": 2200 } },
    scr_whqtq3: { name: "Module — Overview", route: "/modules/m-01", state: { "tab": "Overview" }, position: { "x": 1560, "y": 2200 } },
    scr_8xjnze: { name: "Module — Lessons", route: "/modules/m-01", state: { "tab": "Lessons" }, position: { "x": 2960, "y": 2200 } },
    scr_mrdpb4: { name: "Module — Practice", route: "/modules/m-01", state: { "tab": "Practice" }, position: { "x": 4360, "y": 2200 } },
    scr_9yd2uh: { name: "Module — Quiz", route: "/modules/m-01", state: { "tab": "Quiz" }, position: { "x": 5760, "y": 2200 } },
    scr_9nnzhz: { name: "Module — Resources", route: "/modules/m-01", state: { "tab": "Resources" }, position: { "x": 7160, "y": 2200 } },
    scr_almijf: { name: "Module — Analytics", route: "/modules/m-01", state: { "tab": "Analytics" }, position: { "x": 8560, "y": 2200 } },
    scr_3ycpbd: { name: "Courses — Grid", route: "/courses", state: { "view": "Grid" }, position: { "x": 160, "y": 4180 } },
    scr_xfzaqt: { name: "Courses — Table", route: "/courses", state: { "view": "Table" }, position: { "x": 1560, "y": 4180 } },
    scr_i4olzg: { name: "Analytics — Students", route: "/analytics", state: { "tab": "Students" }, position: { "x": 160, "y": 6160 } },
    scr_vy73i3: { name: "Analytics — Platform", route: "/analytics", state: { "tab": "Platform" }, position: { "x": 1560, "y": 6160 } },
    scr_tdhlsm: { name: "Analytics — Content", route: "/analytics", state: { "tab": "Content" }, position: { "x": 2960, "y": 6160 } },
    scr_7iyn0j: { name: "Settings — General", route: "/settings", state: { "section": "General" }, position: { "x": 160, "y": 8140 } },
    scr_6lpy20: { name: "Settings — AI", route: "/settings", state: { "section": "AI settings" }, position: { "x": 1560, "y": 8140 } },
    scr_jnlbw3: { name: "Settings — API keys", route: "/settings", state: { "section": "API keys" }, position: { "x": 2960, "y": 8140 } },
    scr_5p9b0k: { name: "Settings — Roles", route: "/settings", state: { "section": "Roles" }, position: { "x": 4360, "y": 8140 } },
    scr_y12hhz: { name: "Settings — Custom domain", route: "/settings", state: { "section": "Custom domain" }, position: { "x": 5760, "y": 8140 } }
  },
  sections: {
    sec_gc2ur0: { name: "Dashboard", x: 0, y: 0, width: 1520, height: 1180 },
    sec_zizo97: { name: "Modules", x: 0, y: 1980, width: 9920, height: 1180 },
    sec_woxr26: { name: "Courses", x: 0, y: 3960, width: 2920, height: 1180 },
    sec_yclvpl: { name: "Analytics", x: 0, y: 5940, width: 4320, height: 1180 },
    sec_zyq6o6: { name: "Settings", x: 0, y: 7920, width: 7120, height: 1180 }
  },
  layers: [
  { kind: "screen", id: "scr_wum54t" },
  { kind: "section", id: "sec_gc2ur0", children: [] },
  { kind: "section", id: "sec_zizo97", children: [
    { kind: "screen", id: "scr_2cyxln" },
    { kind: "screen", id: "scr_whqtq3" },
    { kind: "screen", id: "scr_8xjnze" },
    { kind: "screen", id: "scr_mrdpb4" },
    { kind: "screen", id: "scr_9yd2uh" },
    { kind: "screen", id: "scr_9nnzhz" },
    { kind: "screen", id: "scr_almijf" }]
  },
  { kind: "section", id: "sec_woxr26", children: [
    { kind: "screen", id: "scr_3ycpbd" },
    { kind: "screen", id: "scr_xfzaqt" }]
  },
  { kind: "section", id: "sec_yclvpl", children: [
    { kind: "screen", id: "scr_i4olzg" },
    { kind: "screen", id: "scr_vy73i3" },
    { kind: "screen", id: "scr_tdhlsm" }]
  },
  { kind: "section", id: "sec_zyq6o6", children: [
    { kind: "screen", id: "scr_7iyn0j" },
    { kind: "screen", id: "scr_6lpy20" },
    { kind: "screen", id: "scr_jnlbw3" },
    { kind: "screen", id: "scr_5p9b0k" },
    { kind: "screen", id: "scr_y12hhz" }]
  }]

};