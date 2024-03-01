using Microsoft.EntityFrameworkCore;
using Vehicle.DataLayer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();



builder.Services.AddDbContext<DBVehicleContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("MySqlConn"))
);




// done -> JSON Serializer
builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
    options.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver();
});




var app = builder.Build();



// done -> Enable Cors (Cross Origin)
app.UseCors(c => c.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());



// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
