import { Component } from "@angular/core";
import { ButtonComponent } from "@components/button/button.component";
import { TableComponent } from "@components/table/table.component";
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { SkeletonModule } from 'primeng/skeleton';
@Component({
  selector: "uebiz-hardware",
  imports: [TableComponent, ButtonComponent,SkeletonModule],
  templateUrl: "./hardware.component.html",
})
export class HardwareComponent {
  tableColumns = [
    { field: "hostname", header: "Hostname" },
    { field: "softwareType", header: "Software Type" },
    { field: "deviceType", header: "Device Type" },
    { field: "osType", header: "OS Type" },
    { field: "currentVersion", header: "Current Version" },
    { field: "suggestedVersion", header: "Suggested Version" },
    { field: "status", header: "Status" },
    { field: "psirtCount", header: "PSIRT Count" },
  ];

  tableData = [
    {
      hostname: "zy06dl5r10",
      softwareType: "NX-OS System Software",
      deviceType: "Nexus",
      osType: "cisco-nxos",
      currentVersion: "7.0(3)17(7)",
      suggestedVersion: "10.3(6)",
      status: "Critical",
      psirtCount: 18,
    },
    {
      hostname: "zy06dl5r09",
      softwareType: "NX-OS System Software",
      deviceType: "Nexus",
      osType: "cisco-nxos",
      currentVersion: "7.0(3)17(7)",
      suggestedVersion: "10.3(6)",
      status: "Critical",
      psirtCount: 18,
    },
    {
      hostname: "yw04oc1r02",
      softwareType: "NX-OS System Software",
      deviceType: "Nexus",
      osType: "cisco-nxos",
      currentVersion: "9.3(9)",
      suggestedVersion: "10.3(6)",
      status: "Healthy",
      psirtCount: 8,
    },
    {
      hostname: "yw04oc1r01",
      softwareType: "NX-OS System Software",
      deviceType: "Nexus",
      osType: "cisco-nxos",
      currentVersion: "9.3(9)",
      suggestedVersion: "10.3(6)",
      status: "Healthy",
      psirtCount: 8,
    },
    {
      hostname: "yw04mdir04",
      softwareType: "NX-OS System Software",
      deviceType: "Nexus",
      osType: "cisco-nxos",
      currentVersion: "9.3(9)",
      suggestedVersion: "10.3(6)",
      status: "Healthy",
      psirtCount: 8,
    },
    {
      hostname: "yw04mdir03",
      softwareType: "NX-OS System Software",
      deviceType: "Nexus",
      osType: "cisco-nxos",
      currentVersion: "9.3(9)",
      suggestedVersion: "10.3(6)",
      status: "Healthy",
      psirtCount: 8,
    },
  ];
  isLoading = false;
  selectedRows: any[] = [];


  getSelectedRows(selectedRows: any[]) {
    this.selectedRows = selectedRows;
  }

  exportData() {
    if (this.selectedRows.length === 0) {
      return;
    }
  
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet("Selected Rows");
  
    worksheet.columns = this.tableColumns.map(col => ({
      header: col.header,
      key: col.field,
      width: 20 
    }));
  
    this.selectedRows.forEach(row => worksheet.addRow(row));
  
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, "Selected_Rows.xlsx");
    })
  }
}
