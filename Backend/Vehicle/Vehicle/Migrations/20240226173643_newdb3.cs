using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Vehicle.Migrations
{
    public partial class newdb3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "bookDate",
                table: "Vehis",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "bookDate",
                table: "Vehis");
        }
    }
}
