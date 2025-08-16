var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// example of a simple weather forecast API
/**
 * This is a simple weather forecast API that returns a list of weather forecasts.
 * Each forecast includes the date, temperature in Celsius, and a summary.
 * The temperature is randomly generated between -20 and 55 degrees Celsius.
 * The summary is randomly selected from a predefined list of summaries.
 
var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");
**/

var cafeMenu = new CafeMenulist[] {
    new(1,  "burgerwitheggs", "burgerwitheggs.jpg", 120.15),
    new(2,  "petty", "petty.jpg", 15.50),
    new(3,  "prowndish", "prowndish.jpg", 25.00)
};

var cafemenuApi = app.MapGroup("/cafemenu");
cafemenuApi.MapGet("/", () => cafeMenu);
cafemenuApi.MapGet("/{id}", (int id) =>
    cafeMenu.FirstOrDefault(a => a.Id == id) is { } memu
        ? Results.Ok(memu)
        : Results.NotFound());

app.Run();
/**
record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
**/
record CafeMenulist(int Id, string? DishName, string? ImageName, double price, DateOnly? ValidUntil = null, bool IsShown = true);
