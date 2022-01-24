using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_3_Assignment.Models
{
    public class GradeCalculatorModel
    {
        [Range(1, 100)]
        public int assign { get; set; }
        [Range(1, 100)]
        public int group { get; set; }
        [Range(1, 100)]
        public int quiz { get; set; }
        [Range(1, 100)]
        public int exam { get; set; }
        [Range(1, 100)]
        public int intex { get; set; }
    }
}
