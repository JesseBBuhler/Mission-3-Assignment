﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_3_Assignment.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GradeCalculator()
        {
            return View();
        }
    }
}
