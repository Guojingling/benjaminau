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

var cafeMenu = new CafeMenulist[] {
    new(1,  "burgerwitheggs", "burgerwitheggs.jpg"),
    new(2,  "petty", "petty.jpg"),
    new(2,  "prowndish", "prowndish.jpg"),
};

var cafemenuApi = app.MapGroup("/cafemenu");
cafemenuApi.MapGet("/", () => cafeMenu);
cafemenuApi.MapGet("/{id}", (int id) =>
    cafeMenu.FirstOrDefault(a => a.Id == id) is { } memu
        ? Results.Ok(memu)
        : Results.NotFound());

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}

record CafeMenulist(int Id, string? DishName, string? ImageName, DateOnly? ValidUntil = null, bool IsShown = true);
