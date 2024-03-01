using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Vehicle.Migrations
{
    public partial class init3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Vehi",
                table: "Vehi");

            migrationBuilder.RenameTable(
                name: "Vehi",
                newName: "Vehis");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Vehis",
                table: "Vehis",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Vehis",
                table: "Vehis");

            migrationBuilder.RenameTable(
                name: "Vehis",
                newName: "Vehi");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Vehi",
                table: "Vehi",
                column: "Id");
        }
    }
}
